import { ContainerModule } from 'inversify'

import { ConcisePresenter } from '../model/ConcisePresenter'

export const conciseModule = new ContainerModule(({ bind }) => {
  bind(ConcisePresenter).toSelf().inSingletonScope()
})
