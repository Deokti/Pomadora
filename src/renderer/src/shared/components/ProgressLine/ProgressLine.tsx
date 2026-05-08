import clsx from 'clsx'
import type { CSSProperties, HTMLAttributes } from 'react'

import styles from './ProgressLine.module.css'

export type ProgressLineVariant = 'primary' | 'secondary'

export interface ProgressLineProps extends HTMLAttributes<HTMLDivElement> {
  progress: number
  selected?: boolean
  variant?: ProgressLineVariant
}

export const ProgressLine = ({
  progress,
  className,
  selected,
  variant = 'primary',
  style,
  ...props
}: ProgressLineProps) => {
  const progressValue = Math.min(Math.max(progress, 0), 100)
  const classNames = clsx(
    styles.container,
    styles[variant],
    selected && styles.selected,
    className
  )
  const progressStyle = {
    ...style,
    '--progress-line-progress': `${progressValue}%`
  } as CSSProperties

  return (
    <div
      className={classNames}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progressValue}
      style={progressStyle}
      {...props}
    >
      <div className={styles.fill} />
    </div>
  )
}
