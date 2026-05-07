import { ContainerModule } from 'inversify'
import { TimerPresenter } from '../model/TimerPresenter'

export const timerModule = new ContainerModule(({ bind }) => {
  bind(TimerPresenter).toSelf().inSingletonScope()
})
