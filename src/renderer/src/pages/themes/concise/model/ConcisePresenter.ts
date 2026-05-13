import { inject, injectable } from 'inversify'
import {
  PomodoroPhase,
  PomodoroStore,
  pomodoroPhaseLabel,
  type PomodoroTimerSettings
} from 'entities/pomodoro'
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

export type ConciseContentView = {
  statusText: string
  timerMinutes: string
  timerSeconds: string
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

  private getCurrentPhaseDurationSec(): number {
    const { activeTimerSettings, session } = this.pomodoroStore

    if (session.phase === PomodoroPhase.FOCUS) {
      return activeTimerSettings.focusDurationMin * 60
    }

    if (session.phase === PomodoroPhase.SHORT_BREAK) {
      return activeTimerSettings.shortBreakDurationMin * 60
    }

    return activeTimerSettings.longBreakDurationMin * 60
  }

  private formatDurationSec(durationSec: number): string {
    const minutes = Math.floor(durationSec / 60)
    const seconds = durationSec % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  private getStatusText(): string {
    const { activeTimerSettings, session } = this.pomodoroStore

    if (session.phase === PomodoroPhase.FOCUS) {
      return `${pomodoroPhaseLabel[session.phase]} · сессия ${session.focusIndex} из ${activeTimerSettings.focusesBeforeLongBreak}`
    }

    if (session.phase === PomodoroPhase.SHORT_BREAK) {
      return `${pomodoroPhaseLabel[session.phase]} · после сессии ${session.focusIndex}`
    }

    return `${pomodoroPhaseLabel[session.phase]} · после ${activeTimerSettings.focusesBeforeLongBreak} сессий`
  }

  get header(): ConciseHeaderView {
    const { activeTimerSettings, session } = this.pomodoroStore
    const totalStages = activeTimerSettings.focusesBeforeLongBreak * 2

    return {
      totalDurationMin: this.getTotalDurationMin(activeTimerSettings),
      totalStages,
      phaseLabel: pomodoroPhaseLabel[session.phase],
      stages: Array.from({ length: totalStages }).map((_, index) => ({
        id: index,
        progress: 0
      }))
    }
  }

  get content(): ConciseContentView {
    const { session } = this.pomodoroStore
    const remainingSec = Math.max(this.getCurrentPhaseDurationSec() - session.elapsedSec, 0)
    const [timerMinutes, timerSeconds] = this.formatDurationSec(remainingSec).split(':')

    return {
      statusText: this.getStatusText(),
      timerMinutes,
      timerSeconds
    }
  }
}
