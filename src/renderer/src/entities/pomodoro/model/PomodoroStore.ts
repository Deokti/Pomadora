import { injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'

import { createDefaultPomodoroSession, defaultPomodoroTimerSettings } from './defaults'
import type { PomodoroSessionState, PomodoroState, PomodoroTimerSettings } from './types'

@injectable()
export class PomodoroStore implements PomodoroState {
  activeTimerSettings: PomodoroTimerSettings = { ...defaultPomodoroTimerSettings }
  session: PomodoroSessionState = createDefaultPomodoroSession()

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
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
}
