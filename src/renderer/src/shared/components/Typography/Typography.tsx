import MuiTypography, { type TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'

import styles from './Typography.module.css'

type TypographyVariant =
  | 'timer'
  | 'timerCompact'
  | 'h1'
  | 'h2'
  | 'title'
  | 'body'
  | 'label'
  | 'labelWide'
  | 'button'

type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold'

type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'subtle'
  | 'accent'
  | 'danger'
  | 'inherit'

type TypographyAlign = 'left' | 'center' | 'right'

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant' | 'color' | 'align'> {
  children?: ReactNode
  className?: string
  variant?: TypographyVariant
  weight?: TypographyWeight
  color?: TypographyColor
  align?: TypographyAlign
}

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  variant = 'label',
  weight = 'regular',
  align = 'left',
  color = 'primary',
  ...props
}: TypographyProps) => {
  const classNames = clsx(
    styles.container,
    styles[variant],
    styles[weight],
    styles[align],
    styles[color],
    className
  )

  return (
    <MuiTypography className={classNames} component="p" {...props}>
      {children}
    </MuiTypography>
  )
}
