import { ContainerModule } from 'inversify'
import { TimerServiceImpl } from '../model/TimerService'

export const timerServiceModule = new ContainerModule(({ bind }) => {
  bind(TimerServiceImpl).toSelf().inTransientScope()
})
