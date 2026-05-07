import { Container } from 'inversify'
import type { ContainerModule, ServiceIdentifier } from 'inversify'

export type IocKey = string | number | boolean | null | undefined

export type IocKeys = IocKey[]

type IocProviderInitOptions = {
  /**
   * Контейнер, в который нужно загрузить модули.
   *
   * Обычно не передаём его и создаём новый локальный контейнер на provider.
   * Передавать стоит только если нужно загрузить модуль в уже существующий контейнер.
   */
  container?: Container

  /**
   * Родительский контейнер.
   *
   * Локальный контейнер сначала ищет зависимости в себе, а если не находит —
   * поднимается в parentContainer. Так локальный модуль может использовать
   * глобальные зависимости приложения, но не обязан регистрироваться глобально.
   */
  parentContainer?: Container
}

export class IocProvider {
  /**
   * Флаг защищает от повторного init одного и того же provider.
   *
   * Повторная инициализация нужна только при смене keys — перед ней hook
   * сначала вызывает destroy(), а потом init().
   */
  isInited = false

  /**
   * Текущий локальный контейнер конкретного provider.
   *
   * Например, у Timer может быть свой контейнер с TimerPresenter.
   * У другого виджета будет другой provider и другой контейнер.
   */
  private container: Container | null = null

  /**
   * Модули, которые были загружены в container.
   *
   * Храним их, чтобы при destroy() можно было выгрузить эти модули
   * из внешнего контейнера, если он был передан через options.container.
   */
  private modules: ContainerModule[] = []

  /**
   * true — provider сам создал контейнер и может просто выбросить его при destroy().
   * false — контейнер пришёл снаружи, поэтому надо аккуратно unload() только наши модули.
   */
  private ownsContainer = true

  /**
   * Создаёт локальный контейнер и загружает в него переданные ContainerModule.
   *
   * Используется, когда зависимости нужны только конкретному виджету,
   * странице или фиче, а не всему приложению сразу.
   */
  init(modules: Array<ContainerModule | undefined>, options: IocProviderInitOptions = {}): void {
    if (this.isInited) {
      return
    }

    /**
     * modules могут приходить условно: [someModule, isEnabled ? featureModule : undefined].
     * Поэтому undefined отфильтровываем перед загрузкой в Inversify.
     */
    this.modules = modules.filter((module): module is ContainerModule => Boolean(module))
    this.ownsContainer = !options.container

    /**
     * Для доступа к общим зависимостям используем parent-контейнер:
     * локальный container содержит зависимости виджета,
     * parentContainer содержит глобальные зависимости приложения.
     */
    this.container = options.container ?? new Container({ parent: options.parentContainer })
    this.container.load(...this.modules)
    this.isInited = true
  }

  /**
   * Сбрасывает provider.
   *
   * Для собственного контейнера достаточно забыть ссылку — вместе с ней исчезают
   * все singleton'ы локального модуля. Для внешнего контейнера надо выгрузить
   * только те модули, которые загрузил этот provider.
   */
  destroy(): void {
    if (!this.isInited) {
      return
    }

    if (!this.ownsContainer && this.container) {
      this.container.unload(...this.modules)
    }

    this.container = null
    this.modules = []
    this.ownsContainer = true
    this.isInited = false
  }

  /**
   * Достаёт зависимость из текущего локального контейнера.
   *
   * Если зависимости нет локально, Inversify попробует найти её в parentContainer.
   */
  inject<Dependency>(dependency: ServiceIdentifier<Dependency>): Dependency {
    return this.getContainer().get(dependency)
  }

  /**
   * Возвращает текущий контейнер или падает, если provider ещё не инициализирован.
   *
   * Это помогает быстрее поймать ошибку, когда useInjection вызвали до useIocProvider.
   */
  getContainer(): Container {
    if (!this.container) {
      throw new Error('IocProvider was not initialized')
    }

    return this.container
  }
}
