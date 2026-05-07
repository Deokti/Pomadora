import { injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'

@injectable()
export class TimerPresenter {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  increaseTimer(): void {
    this.secondsPassed += 1
  }
}
