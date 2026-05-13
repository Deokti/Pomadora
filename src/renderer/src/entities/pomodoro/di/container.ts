import { ContainerModule } from 'inversify'

import { PomodoroStore } from '../model/PomodoroStore'

export const pomodoroModule = new ContainerModule(({ bind }) => {
  bind(PomodoroStore).toSelf().inSingletonScope()
})
