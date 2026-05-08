import clsx from 'clsx'
import { ProgressBar, type ProgressBarProps } from '@heroui/react'

import styles from './ProgressLine.module.css'

export type ProgressLineVariant = 'primary' | 'secondary'
export type ProgressLineSize = 'small' | 'medium'

export interface ProgressLineProps extends Omit<ProgressBarProps, 'value' | 'size'> {
  progress: number
  selected?: boolean
  variant?: ProgressLineVariant
  size?: ProgressLineSize
}

export const ProgressLine = ({
  progress,
  className,
  selected,
  variant = 'primary',
  size = 'small',
  ...props
}: ProgressLineProps) => {
  const progressValue = Math.min(Math.max(progress, 0), 100)
  const classNames = clsx(styles.container, styles[variant], selected && styles.selected, className)

  return (
    <ProgressBar value={progressValue} className={classNames} {...props}>
      <ProgressBar.Track className={clsx(styles[size], styles.track)}>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
  )
}
