import clsx from 'clsx'
import LinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress'
import { type FC } from 'react'

import styles from './ProgressLine.module.css'

export type ProgressLineVariant = 'focus' | 'break' | 'long'
export type ProgressLineSize = 'small' | 'medium'

export interface ProgressLineProps extends Omit<
  LinearProgressProps,
  'value' | 'variant' | 'color'
> {
  progress: number
  variant?: ProgressLineVariant
  size?: ProgressLineSize
}

export const ProgressLine: FC<ProgressLineProps> = ({
  progress,
  className,
  variant = 'focus',
  size = 'small',
  ...props
}: ProgressLineProps) => {
  const progressValue = Math.min(Math.max(progress, 0), 100)
  const classNames = clsx(
    styles.container,
    styles[variant],
    progressValue === 0 && styles.empty,
    className
  )

  return (
    <LinearProgress
      className={clsx(classNames, styles[size])}
      classes={{
        bar: styles.fill
      }}
      value={progressValue}
      variant="determinate"
      {...props}
    />
  )
}
