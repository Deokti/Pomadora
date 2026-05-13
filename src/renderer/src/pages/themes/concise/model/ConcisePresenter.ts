import { inject, injectable } from 'inversify'
import { PomodoroStore, PomodoroTimerSettings } from 'entities/pomodoro'
import { makeAutoObservable } from 'mobx'

export type ConciseStageView = {
  id: number
  progress: number
}

export type ConciseHeaderView = {
  totalDurationMin: number
  totalStages: number
  phaseLabel: string
  stages: ConciseStageView[]
}

@injectable()
export class ConcisePresenter {
  constructor(@inject(PomodoroStore) private pomodoroStore: PomodoroStore) {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  private getTotalDurationMin(activeTimerSettings: PomodoroTimerSettings): number {
    return (
      activeTimerSettings.focusDurationMin * activeTimerSettings.focusesBeforeLongBreak +
      activeTimerSettings.shortBreakDurationMin * (activeTimerSettings.focusesBeforeLongBreak - 1) +
      activeTimerSettings.longBreakDurationMin
    )
  }

  get header(): ConciseHeaderView {
    const { activeTimerSettings } = this.pomodoroStore
    const totalStages = activeTimerSettings.focusesBeforeLongBreak * 2

    return {
      totalDurationMin: this.getTotalDurationMin(activeTimerSettings),
      totalStages,
      phaseLabel: '3123',
      stages: Array.from({ length: totalStages }).map((_, index) => ({
        id: index,
        progress: 0
      }))
    }
  }
}
