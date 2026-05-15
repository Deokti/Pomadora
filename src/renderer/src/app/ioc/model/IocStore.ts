import { Container } from 'inversify'
import { pomodoroModule } from 'entities/pomodoro'
import { timerServiceModule } from 'shared/services'

class IocStore {
  container = new Container()

  constructor() {
    this.container.load(pomodoroModule)
    this.container.load(timerServiceModule)
  }
}

export const iocStore = new IocStore()
