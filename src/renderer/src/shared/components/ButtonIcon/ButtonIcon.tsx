import MuiIconButton, { type IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'
import clsx from 'clsx'

import styles from './ButtonIcon.module.css'

type ButtonIconVariant = 'rounded' | 'circle'
type ButtonIconSize = 'small' | 'medium'

export interface ButtonIconProps extends Omit<
  MuiIconButtonProps,
  'color' | 'size'
> {
  variant?: ButtonIconVariant
  size?: ButtonIconSize
}

export const ButtonIcon = ({
  children,
  className,
  variant = 'rounded',
  size = 'small',
  ...props
}: ButtonIconProps) => {
  return (
    <MuiIconButton
      className={clsx(styles.container, styles[variant], styles[size], className)}
      disableRipple
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}
