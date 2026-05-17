import { PomodoroPhase, PomodoroTimerSettings } from '../types'

/**
 * Возвращает длительность указанной фазы pomodoro-цикла в секундах.
 *
 * Длительность берётся из активных настроек таймера:
 * focusDurationMin - для фокуса,
 * shortBreakDurationMin - для короткого перерыва,
 * longBreakDurationMin - для длинного перерыва.
 */
export const getCurrentPhaseDurationSec = (
  settings: PomodoroTimerSettings,
  phase: PomodoroPhase
): number => {
  const { focusDurationMin, shortBreakDurationMin, longBreakDurationMin } = settings

  switch (phase) {
    case PomodoroPhase.FOCUS: {
      return focusDurationMin * 60
    }

    case PomodoroPhase.SHORT_BREAK: {
      return shortBreakDurationMin * 60
    }

    case PomodoroPhase.LONG_BREAK: {
      return longBreakDurationMin * 60
    }
  }
}
