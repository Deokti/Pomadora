import { PomodoroPhase, PomodoroTimerSettings } from 'entities/pomodoro'

/**
 * Функция принимает параметры в виде текущих настроек и фазы и отдает время в секундах
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
