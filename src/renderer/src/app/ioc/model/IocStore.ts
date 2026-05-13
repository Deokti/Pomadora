import { Container } from 'inversify'
import { pomodoroModule } from 'entities/pomodoro'

class IocStore {
  container = new Container()

  constructor() {
    this.container.load(pomodoroModule)
  }
}

export const iocStore = new IocStore()
