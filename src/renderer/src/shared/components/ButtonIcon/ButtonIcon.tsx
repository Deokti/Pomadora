import { Button as HerouiButton, ButtonProps as HerouiButtonProps } from '@heroui/react'
import clsx from 'clsx'

import styles from './ButtonIcon.module.css'

type ButtonIconVariant = 'rounded' | 'circle'
type ButtonIconSize = 'small' | 'medium'

export interface ButtonIconProps extends Omit<
  HerouiButtonProps,
  'variant' | 'isIconOnly' | 'size' | 'fullWidth'
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
    <HerouiButton
      isIconOnly
      variant="outline"
      className={clsx(styles.container, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </HerouiButton>
  )
}
