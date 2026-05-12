import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'

import styles from './Button.module.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'text'

export interface ButtonProps extends Omit<MuiButtonProps, 'size' | 'variant' | 'color'> {
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
    <MuiButton className={classNames} disableElevation disableRipple {...props}>
      {children}
    </MuiButton>
  )
}
