import { useEffect } from 'react'

/**
 * Подписывается на нажатие указанной клавиши и вызывает callback.
 *
 * Событие живёт только пока смонтирован компонент, который использует хук,
 * и автоматически снимается при размонтировании.
 */
export const useKeyDown = (key: KeyboardEvent['key'], callback: () => void): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== key) {
        return
      }

      callback()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, key])
}
