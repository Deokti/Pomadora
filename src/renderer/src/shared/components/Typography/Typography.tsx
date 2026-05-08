import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

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

export interface TypographyProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
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
    <p className={classNames} {...props}>
      {children}
    </p>
  )
}
