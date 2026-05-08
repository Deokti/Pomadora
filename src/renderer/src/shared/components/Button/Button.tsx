import { Button as HerouiButton, ButtonProps as HerouiButtonProps } from '@heroui/react'
import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

export type ButtonSize = 'small' | 'medium'
export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends Omit<HerouiButtonProps, 'size' | 'variant'> {
  children?: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = clsx(styles.button, styles[size], styles[variant], className)

  return (
    <HerouiButton className={classNames} {...props}>
      {children}
    </HerouiButton>
  )
}
