import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card'
import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'

import styles from './Card.module.css'

export type CardVariant = 'small' | 'medium'

export interface CardProps extends Omit<MuiCardProps, 'variant'> {
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
    <MuiCard
      className={clsx(styles.container, styles[variant], className)}
      elevation={0}
      {...props}
    >
      {children}
    </MuiCard>
  )
}
