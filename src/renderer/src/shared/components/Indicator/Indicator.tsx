import Box, { type BoxProps } from '@mui/material/Box'
import clsx from 'clsx'
import styles from './Indicator.module.css'

type IndicatorColor = 'primary' | 'secondary'

export interface IndicatorProps extends Omit<BoxProps, 'color'> {
  className?: string
  color?: IndicatorColor
  pulse?: boolean
  shadow?: boolean
}

export const Indicator = ({
  shadow,
  pulse,
  color = 'primary',
  className,
  ...props
}: IndicatorProps) => {
  const classes = clsx(
    styles.container,
    styles[color],
    shadow && styles.shadow,
    pulse && styles.pulse,
    className
  )

  return <Box component="span" className={classes} {...props} />
}
