import { PomodoroPhase } from './types'
import type { PomodoroSessionState, PomodoroTimerSettings } from './types'

export const defaultPomodoroTimerSettings: PomodoroTimerSettings = {
  focusDurationMin: 25,
  shortBreakDurationMin: 5,
  longBreakDurationMin: 15,
  focusesBeforeLongBreak: 4,
  autoStartBreaks: true,
  autoStartFocus: false
}

export const createDefaultPomodoroSession = (): PomodoroSessionState => ({
  phase: PomodoroPhase.FOCUS,
  phaseIndex: 0,
  focusIndex: 1,
  isRunning: false,
  elapsedSec: 0
})
