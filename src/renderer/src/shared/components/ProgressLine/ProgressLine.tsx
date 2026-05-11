import clsx from 'clsx'
import LinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress'
import { type FC } from 'react'

import styles from './ProgressLine.module.css'

export type ProgressLineVariant = 'primary' | 'secondary'
export type ProgressLineSize = 'small' | 'medium'

export interface ProgressLineProps extends Omit<LinearProgressProps, 'value' | 'variant' | 'color'> {
  progress: number
  selected?: boolean
  variant?: ProgressLineVariant
  size?: ProgressLineSize
}

export const ProgressLine: FC<ProgressLineProps> = ({
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
    <LinearProgress
      className={clsx(classNames, styles[size], styles.track)}
      classes={{
        bar: styles.fill
      }}
      value={progressValue}
      variant="determinate"
      {...props}
    />
  )
}
