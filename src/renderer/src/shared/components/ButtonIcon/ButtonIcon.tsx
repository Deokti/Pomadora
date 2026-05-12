import MuiIconButton, { type IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'
import clsx from 'clsx'
import { type CSSProperties } from 'react'

import styles from './ButtonIcon.module.css'

type ButtonIconVariant = 'primary' | 'secondary'

export interface ButtonIconProps extends Omit<
  MuiIconButtonProps,
  'color' | 'size'
> {
  iconSize?: number
  variant?: ButtonIconVariant
}

export const ButtonIcon = ({
  children,
  className,
  iconSize,
  style,
  variant = 'secondary',
  ...props
}: ButtonIconProps) => {
  const buttonStyles = {
    '--button-icon-size': iconSize ? `${iconSize}px` : undefined,
    ...style
  } as CSSProperties

  return (
    <MuiIconButton
      className={clsx(styles.container, styles[variant], className)}
      disableRipple
      style={buttonStyles}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}
