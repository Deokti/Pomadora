import { injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'

import { createDefaultPomodoroSession, defaultPomodoroTimerSettings } from './helpers/defaults'
import { PomodoroPhase } from './types'
import type { PomodoroSessionState, PomodoroState, PomodoroTimerSettings } from './types'

@injectable()
export class PomodoroStore implements PomodoroState {
  activeTimerSettings: PomodoroTimerSettings = { ...defaultPomodoroTimerSettings }
  session: PomodoroSessionState = createDefaultPomodoroSession()
  private timerId: number | null = null

  constructor() {
    makeAutoObservable<this, 'timerId'>(this, { timerId: false }, { autoBind: true })
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

  private clearTimer(): void {
    if (this.timerId === null) {
      return
    }

    window.clearInterval(this.timerId)
    this.timerId = null
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

  /**
   * Заменяет текущее положение внутри pomodoro-цикла.
   *
   * Это минимальный технический метод на время, пока нет отдельных actions
   * вроде start, pause, reset и перехода к следующему этапу.
   */
  setSession(session: PomodoroSessionState): void {
    this.session = session
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
    this.timerId = window.setInterval(this.tick, 1000)
  }

  /** Останавливает отсчёт текущего этапа без сброса прошедшего времени. */
  pause(): void {
    this.session.isRunning = false
    this.clearTimer()
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
    this.clearTimer()
    this.session.elapsedSec = 0
  }
}
