import { PomodoroPhase } from '../types'
import type { PomodoroSessionState, PomodoroTimerSettings } from '../types'

export const defaultPomodoroTimerSettings: PomodoroTimerSettings = {
  focusDurationMin: 5,
  shortBreakDurationMin: 2,
  longBreakDurationMin: 3,
  focusesBeforeLongBreak: 4,
  autoStartBreaks: false,
  autoStartFocus: false
}

export const createDefaultPomodoroSession = (): PomodoroSessionState => ({
  phase: PomodoroPhase.FOCUS,
  phaseIndex: 0,
  focusIndex: 1,
  isRunning: false,
  elapsedSec: 0
})
