import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'

import styles from './Button.module.css'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'text'
export type ButtonHoverEffect = 'pill-shift' | 'accent-icon'

export interface ButtonProps extends Omit<MuiButtonProps, 'size' | 'variant' | 'color'> {
  children?: ReactNode
  hoverEffect?: ButtonHoverEffect
  size?: ButtonSize
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  hoverEffect,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = clsx(
    styles.button,
    styles[size],
    styles[variant],
    hoverEffect && styles[hoverEffect],
    className
  )

  return (
    <MuiButton className={classNames} disableElevation disableRipple {...props}>
      {children}
    </MuiButton>
  )
}
