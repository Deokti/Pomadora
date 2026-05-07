import { useEffect, useMemo } from 'react'
import type { Container, ContainerModule, ServiceIdentifier } from 'inversify'
import { IocKeys, IocProvider } from './IocProvider'
import { useInjection } from './useInjection'

type UseIocProviderParams = {
  /**
   * Нужно ли автоматически уничтожать локальный provider при unmount компонента.
   *
   * Для UI-модулей почти всегда true: компонент ушёл со страницы —
   * его presenter и локальные singleton'ы тоже больше не нужны.
   */
  autoDestroy?: boolean

  /**
   * Внешний контейнер, если нужно загрузить modules не в новый локальный контейнер,
   * а в уже существующий. Обычно не нужен.
   */
  container?: Container

  /**
   * Ключи жизненного цикла локального контейнера.
   *
   * Пример: keys: [timerId] или keys: [cardId].
   * Если значение ключа изменилось, provider пересоздаст контейнер,
   * а значит появится новый presenter для нового id.
   */
  keys?: IocKeys

  /**
   * Родительский контейнер с глобальными зависимостями приложения.
   *
   * Локальный контейнер сможет использовать зависимости из parentContainer,
   * но свои presenter'ы не будет регистрировать глобально.
   */
  parentContainer?: Container
}

/**
 * Превращаем keys в строковую сигнатуру для dependency array React.
 *
 * Почему не кладём keys напрямую в зависимости:
 *   useIocProvider(..., { keys: [timerId] })
 *
 * Массив [timerId] создаётся заново на каждом render, даже если timerId тот же.
 * Из-за этого контейнер пересоздавался бы слишком часто.
 *
 * JSON.stringify сравнивает именно значения ключей:
 *   [1] -> "[1]"
 *   [1] -> "[1]" — не пересоздаём
 *   [2] -> "[2]" — пересоздаём
 */
const serializeKeys = (keys: IocKeys = []): string => JSON.stringify(keys)

/**
 * Подключает локальные IOC-модули к конкретному компоненту/фиче/виджету.
 *
 * Компонент получает короткий useInjection, который достаёт зависимости
 * именно из контейнера этого provider.
 */
export const useIocProvider = (
  provider: IocProvider,
  modules: Array<ContainerModule | undefined>,
  params: UseIocProviderParams = {}
) => {
  const { autoDestroy = true, container, keys = [], parentContainer } = params
  const keysSignature = serializeKeys(keys)

  /**
   * Инициализируем provider синхронно во время render-фазы.
   *
   * Это важно, потому что useInjection вызывается ниже в том же render.
   * Если делать init в useEffect, первый render успеет попытаться получить
   * зависимость из ещё не созданного контейнера.
   */
  useMemo(() => {
    provider.destroy()
    provider.init(modules, { container, parentContainer })
  }, [provider, modules, keysSignature, container, parentContainer])

  /**
   * При unmount компонента очищаем provider.
   *
   * Так локальные presenter'ы не живут дольше своего виджета/страницы/модалки.
   */
  useEffect(() => {
    return () => {
      if (autoDestroy) {
        provider.destroy()
      }
    }
  }, [autoDestroy, provider])

  return {
    /**
     * Возвращаем hook, привязанный именно к этому provider.
     *
     * Компоненту не нужно помнить, из какого контейнера доставать зависимость —
     * он просто вызывает useInjection(TimerPresenter).
     */
    useInjection: <Dependency>(dependency: ServiceIdentifier<Dependency>): Dependency => {
      return useInjection(provider, dependency, { keys })
    }
  }
}
