import { useMemo } from 'react'
import type { ServiceIdentifier } from 'inversify'
import type { IocKeys, IocProvider } from './IocProvider'

type UseInjectionParams = {
  /**
   * Те же ключи, что были переданы в useIocProvider.
   *
   * Когда keys меняются, provider пересоздаёт контейнер,
   * а useInjection должен заново достать dependency уже из нового контейнера.
   */
  keys?: IocKeys
}

/**
 * Сигнатура ключей нужна только для dependency array.
 *
 * Сам массив keys использовать нельзя: если он создан inline,
 * React будет видеть новый массив на каждый render.
 */
const serializeKeys = (keys: IocKeys = []): string => JSON.stringify(keys)

/**
 * Достаёт зависимость из конкретного IocProvider.
 *
 * В отличие от useInjection из inversify-react, этот hook работает
 * не с глобальным React Provider, а с нашим локальным IocProvider.
 */
export const useInjection = <Dependency>(
  provider: IocProvider,
  dependency: ServiceIdentifier<Dependency>,
  params: UseInjectionParams = {}
): Dependency => {
  const keysSignature = serializeKeys(params.keys)

  /**
   * Кэшируем resolved dependency между render'ами.
   *
   * Перезапрашиваем зависимость только если:
   * - поменялся provider,
   * - поменялся service identifier,
   * - поменялись values внутри keys.
   */
  return useMemo(() => provider.inject(dependency), [provider, dependency, keysSignature])
}
