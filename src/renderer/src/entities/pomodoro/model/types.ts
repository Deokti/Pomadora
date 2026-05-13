/**
 * Этап pomodoro-цикла.
 *
 * Цикл состоит из фокусов, коротких перерывов между ними и длинного перерыва в конце.
 */
export enum PomodoroPhase {
  FOCUS = 'focus',
  SHORT_BREAK = 'shortBreak',
  LONG_BREAK = 'longBreak'
}

/**
 * Правила повторяющегося pomodoro-цикла.
 *
 * Эти значения описывают не весь рабочий день, а один цикл, который повторяется,
 * пока пользователь сам не остановит работу.
 */
export interface PomodoroTimerSettings {
  /** Длительность одного фокус-этапа в минутах. */
  focusDurationMin: number

  /** Длительность короткого перерыва между обычными фокусами в минутах. */
  shortBreakDurationMin: number

  /** Длительность длинного перерыва в конце цикла в минутах. */
  longBreakDurationMin: number

  /** Количество фокус-этапов до длинного перерыва. */
  focusesBeforeLongBreak: number

  /** Нужно ли автоматически запускать перерыв после завершения фокуса. */
  autoStartBreaks: boolean

  /** Нужно ли автоматически запускать следующий фокус после завершения перерыва. */
  autoStartFocus: boolean
}

/**
 * Текущее положение пользователя внутри активного pomodoro-цикла.
 *
 * Это runtime-состояние: оно меняется во время работы таймера и не является настройками.
 */
export interface PomodoroSessionState {
  /** Текущий этап: фокус, короткий перерыв или длинный перерыв. */
  phase: PomodoroPhase

  /** Номер этапа внутри цикла, начиная с 0. Нужен для прогресс-линии этапов. */
  phaseIndex: number

  /** Номер фокус-сессии внутри цикла, начиная с 1. Нужен для текста "сессия 1 из 4". */
  focusIndex: number

  /** Запущен ли таймер прямо сейчас. */
  isRunning: boolean

  /** Сколько секунд прошло в текущем этапе. */
  elapsedSec: number
}

/**
 * Минимальное состояние pomodoro-сущности.
 *
 * activeTimerSettings — снапшот правил, по которым идёт текущий цикл.
 * session — текущее положение внутри этого цикла.
 */
export interface PomodoroState {
  /** Настройки таймера, применённые к текущему циклу. */
  activeTimerSettings: PomodoroTimerSettings

  /** Текущая активная сессия внутри pomodoro-цикла. */
  session: PomodoroSessionState
}
