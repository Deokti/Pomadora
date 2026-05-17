import { useEffect } from 'react'

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
