import { inject, injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'

import { createDefaultPomodoroSession, defaultPomodoroTimerSettings } from './helpers/defaults'
import { PomodoroPhase } from './types'
import type { PomodoroSessionState, PomodoroState, PomodoroTimerSettings } from './types'
import { TimerServiceImpl } from 'shared/services'

@injectable()
export class PomodoroStore implements PomodoroState {
  activeTimerSettings: PomodoroTimerSettings = { ...defaultPomodoroTimerSettings }
  session: PomodoroSessionState = createDefaultPomodoroSession()

  constructor(@inject(TimerServiceImpl) private timerService: TimerServiceImpl) {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  private getCurrentPhaseDurationSec(): number {
    if (this.session.phase === PomodoroPhase.FOCUS) {
      return this.activeTimerSettings.focusDurationMin * 60
    }

    if (this.session.phase === PomodoroPhase.SHORT_BREAK) {
      return this.activeTimerSettings.shortBreakDurationMin * 60
    }

    return this.activeTimerSettings.longBreakDurationMin * 60
  }

  private getNextSession(): PomodoroSessionState {
    const nextPhaseIndex = this.session.phaseIndex + 1
    const totalStages = this.activeTimerSettings.focusesBeforeLongBreak * 2

    if (nextPhaseIndex >= totalStages) {
      return createDefaultPomodoroSession()
    }

    const focusIndex = Math.floor(nextPhaseIndex / 2) + 1
    const phase =
      nextPhaseIndex % 2 === 0
        ? PomodoroPhase.FOCUS
        : focusIndex === this.activeTimerSettings.focusesBeforeLongBreak
          ? PomodoroPhase.LONG_BREAK
          : PomodoroPhase.SHORT_BREAK

    return {
      phase,
      phaseIndex: nextPhaseIndex,
      focusIndex,
      isRunning: false,
      elapsedSec: 0
    }
  }

  private shouldAutoStartPhase(phase: PomodoroPhase): boolean {
    if (phase === PomodoroPhase.FOCUS) {
      return this.activeTimerSettings.autoStartFocus
    }

    return this.activeTimerSettings.autoStartBreaks
  }

  /**
   * Применяет настройки таймера к текущему pomodoro-циклу.
   *
   * Метод делает копию объекта, чтобы активный цикл не зависел от настроек,
   * которые пользователь может продолжить менять в UI.
   */
  applyTimerSettings(settings: PomodoroTimerSettings): void {
    this.activeTimerSettings = { ...settings }
  }

  /** Запускает отсчёт текущего этапа pomodoro. */
  start(): void {
    if (this.session.isRunning) {
      return
    }

    if (this.session.elapsedSec >= this.getCurrentPhaseDurationSec()) {
      this.session.elapsedSec = 0
    }

    this.session.isRunning = true
    this.timerService.start(this.tick, 1000)
  }

  /** Останавливает отсчёт текущего этапа без сброса прошедшего времени. */
  pause(): void {
    this.session.isRunning = false
    this.timerService.stop()
  }

  /** Увеличивает прошедшее время текущего этапа на одну секунду. */
  tick(): void {
    if (!this.session.isRunning) return

    const durationSec = this.getCurrentPhaseDurationSec()
    this.session.elapsedSec = Math.min(this.session.elapsedSec + 1, durationSec)

    if (this.session.elapsedSec >= durationSec) {
      this.pause()
    }
  }

  reset(): void {
    this.session.isRunning = false
    this.timerService.stop()
    this.session.elapsedSec = 0
  }

  finish(): void {
    this.timerService.stop()
    this.session = this.getNextSession()

    if (this.shouldAutoStartPhase(this.session.phase)) {
      this.start()
    }
  }
}
