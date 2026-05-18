import clsx from 'clsx'
import { type ChangeEvent, type FC, type FocusEvent, useEffect, useState } from 'react'

import styles from './NumberStepper.module.css'

const DEFAULT_MIN = 0
const DEFAULT_STEP = 1

export interface NumberStepperProps {
  value: number
  max: number
  min?: number
  step?: number
  className?: string
  disabled?: boolean
  onChange: (value: number) => void
}

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

export const NumberStepper: FC<NumberStepperProps> = ({
  value,
  max,
  min = DEFAULT_MIN,
  step = DEFAULT_STEP,
  className,
  disabled = false,
  onChange
}: NumberStepperProps) => {
  const normalizedValue = clamp(value, min, max)
  const [draftValue, setDraftValue] = useState(String(normalizedValue))

  useEffect(() => {
    setDraftValue(String(normalizedValue))
  }, [normalizedValue])

  const updateValue = (nextValue: number) => {
    const clampedValue = clamp(nextValue, min, max)

    setDraftValue(String(clampedValue))
    onChange(clampedValue)
  }

  const handleDecrease = () => {
    updateValue(normalizedValue - step)
  }

  const handleIncrease = () => {
    updateValue(normalizedValue + step)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextDraftValue = event.target.value

    if (nextDraftValue === '') {
      setDraftValue(nextDraftValue)
      return
    }

    if (!/^\d+$/.test(nextDraftValue)) {
      return
    }

    const nextValue = Number(nextDraftValue)

    if (nextValue < min || nextValue > max) {
      return
    }

    setDraftValue(nextDraftValue)
    onChange(nextValue)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value)

    if (event.target.value === '' || Number.isNaN(nextValue)) {
      updateValue(min)
      return
    }

    updateValue(nextValue)
  }

  return (
    <div className={clsx(styles.container, disabled && styles.disabled, className)}>
      <button
        className={styles.button}
        type="button"
        disabled={disabled || normalizedValue <= min}
        onClick={handleDecrease}
        aria-label="Уменьшить значение"
      >
        -
      </button>

      <input
        className={styles.input}
        type="text"
        inputMode="numeric"
        value={draftValue}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={handleBlur}
        aria-label="Значение"
      />

      <button
        className={styles.button}
        type="button"
        disabled={disabled || normalizedValue >= max}
        onClick={handleIncrease}
        aria-label="Увеличить значение"
      >
        +
      </button>
    </div>
  )
}
