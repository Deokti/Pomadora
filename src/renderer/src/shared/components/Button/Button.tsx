import { Button as HerouiButton, ButtonProps as HerouiButtonProps } from '@heroui/react'
import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

export type ButtonSize = 'small' | 'medium'
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type ButtonVariant = 'text' | 'contained' | 'outlined'

export interface ButtonProps extends Omit<HerouiButtonProps, 'size' | 'variant'> {
  children?: ReactNode
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  ...props
}: ButtonProps) => {
  const classNames = clsx(styles.button, styles[size], styles[color], styles[variant], className)

  return (
    <HerouiButton className={classNames} {...props}>
      {children}
    </HerouiButton>
  )
}
