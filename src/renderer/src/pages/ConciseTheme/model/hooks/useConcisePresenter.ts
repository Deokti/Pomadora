import { iocStore } from 'app/ioc/model/IocStore'
import { useIocProvider } from 'shared/ioc'

import { ConcisePresenter } from '../ConcisePresenter'
import { iocProvider } from '../../di/iocProvider'
import { modules } from '../../di/modules'

export const useConcisePresenter = (): ConcisePresenter => {
  const { useInjection } = useIocProvider(iocProvider, modules, {
    parentContainer: iocStore.container
  })

  return useInjection(ConcisePresenter)
}
