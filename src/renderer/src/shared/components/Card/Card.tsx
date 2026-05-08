import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Card.module.css'

export type CardVariant = 'small' | 'medium'

export interface CardProps {
  children?: ReactNode
  className?: string
  variant?: CardVariant
}

export const Card: FC<CardProps> = ({
  children,
  className,
  variant = 'small',
  ...props
}: CardProps) => {
  return (
    <div className={clsx(styles.container, styles[variant], className)} {...props}>
      {children}
    </div>
  )
}
