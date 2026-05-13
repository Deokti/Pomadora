import { inject, injectable } from 'inversify'
import {
  PomodoroPhase,
  PomodoroStore,
  pomodoroPhaseLabel,
  type PomodoroTimerSettings
} from 'entities/pomodoro'
import { makeAutoObservable } from 'mobx'

export type ConciseStageVariant = 'focus' | 'break' | 'long'

export type ConciseStageView = {
  id: number
  variant: ConciseStageVariant
  progress: number
  selected: boolean
}

export type ConciseHeaderView = {
  totalDurationMin: number
  totalStages: number
  phaseLabel: string
  currentPhase: PomodoroPhase
  stages: ConciseStageView[]
}

export type ConciseContentView = {
  statusText: string
  timerMinutes: string
  timerSeconds: string
  currentPhase: PomodoroPhase
}

export type ConciseSliderView = {
  elapsedFormatted: string
  durationFormatted: string
  progress: number
}

export type ConciseActionsView = {
  isRunning: boolean
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

  private getStageVariant(stageIndex: number, totalStages: number): ConciseStageVariant {
    if (stageIndex % 2 === 0) {
      return 'focus'
    }

    return stageIndex === totalStages - 1 ? 'long' : 'break'
  }

  get header(): ConciseHeaderView {
    const { activeTimerSettings, session } = this.pomodoroStore
    const totalStages = activeTimerSettings.focusesBeforeLongBreak * 2
    const activeStage = session.phaseIndex
    const durationSec = this.getCurrentPhaseDurationSec()
    const activeProgress =
      durationSec === 0 ? 0 : Math.min((session.elapsedSec / durationSec) * 100, 100)

    return {
      totalDurationMin: this.getTotalDurationMin(activeTimerSettings),
      totalStages,
      currentPhase: session.phase,
      phaseLabel: pomodoroPhaseLabel[session.phase],
      stages: Array.from({ length: totalStages }).map((_, index) => ({
        id: index,
        variant: this.getStageVariant(index, totalStages),
        progress: index < activeStage ? 100 : index === activeStage ? activeProgress : 0,
        selected: index === activeStage
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
      timerSeconds,
      currentPhase: session.phase
    }
  }

  get slider(): ConciseSliderView {
    const { session } = this.pomodoroStore
    const durationSec = this.getCurrentPhaseDurationSec()

    return {
      elapsedFormatted: this.formatDurationSec(session.elapsedSec),
      durationFormatted: this.formatDurationSec(durationSec),
      progress: durationSec === 0 ? 0 : Math.min((session.elapsedSec / durationSec) * 100, 100)
    }
  }

  get actions(): ConciseActionsView {
    const { session } = this.pomodoroStore

    return {
      isRunning: session.isRunning
    }
  }

  start(): void {
    this.pomodoroStore.start()
  }

  pause(): void {
    this.pomodoroStore.pause()
  }

  reset(): void {
    this.pomodoroStore.reset()
  }

  finish(): void {
    this.pomodoroStore.finish()
  }
}
