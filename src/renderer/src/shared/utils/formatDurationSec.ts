/**
 * Форматирует длительность в секундах в строку таймера формата MM:SS.
 * Например: 1500 -> "25:00", 65 -> "01:05".
 */
export const formatDurationSec = (durationSec: number): string => {
  const minutes = Math.floor(durationSec / 60)
  const seconds = durationSec % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
