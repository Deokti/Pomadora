import { PomodoroPhase } from '../types'

export const pomodoroPhaseLabel: Record<PomodoroPhase, string> = {
  [PomodoroPhase.FOCUS]: 'Фокус',
  [PomodoroPhase.SHORT_BREAK]: 'Перерыв',
  [PomodoroPhase.LONG_BREAK]: 'Длинный перерыв'
}
