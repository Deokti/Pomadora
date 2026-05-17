/**
 * Функция преобразовывает микросекунды в строку, формата вида 25:00
 */
export const formatDurationSec = (durationSec: number): string => {
  const minutes = Math.floor(durationSec / 60)
  const seconds = durationSec % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
