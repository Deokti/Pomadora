import type { PomodoroTimerSettings } from '../types'

/**
 * Возвращает суммарную длительность одного полного pomodoro-цикла в минутах.
 *
 * В цикл входят все фокус-фазы, короткие перерывы между ними
 * и один длинный перерыв в конце цикла.
 */
export const getPomodoroTotalDurationMin = (settings: PomodoroTimerSettings): number => {
  return (
    settings.focusDurationMin * settings.focusesBeforeLongBreak +
    settings.shortBreakDurationMin * (settings.focusesBeforeLongBreak - 1) +
    settings.longBreakDurationMin
  )
}
