import MuiIconButton, { type IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'
import clsx from 'clsx'
import { type CSSProperties } from 'react'

import styles from './ButtonIcon.module.css'

type ButtonIconVariant = 'rounded' | 'circle' | 'main'
type ButtonIconSize = 'small' | 'medium'

export interface ButtonIconProps extends Omit<
  MuiIconButtonProps,
  'color' | 'size'
> {
  iconSize?: number
  variant?: ButtonIconVariant
  size?: ButtonIconSize
}

export const ButtonIcon = ({
  children,
  className,
  iconSize,
  style,
  variant = 'rounded',
  size = 'small',
  ...props
}: ButtonIconProps) => {
  const buttonStyles = {
    '--button-icon-size': iconSize ? `${iconSize}px` : undefined,
    ...style
  } as CSSProperties

  return (
    <MuiIconButton
      className={clsx(styles.container, styles[variant], styles[size], className)}
      disableRipple
      style={buttonStyles}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}
