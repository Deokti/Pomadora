import Box, { type BoxProps } from '@mui/material/Box'
import clsx from 'clsx'
import styles from './Indicator.module.css'

type IndicatorColor = 'primary' | 'secondary'

export interface IndicatorProps extends Omit<BoxProps, 'color'> {
  className?: string
  color?: IndicatorColor
  shadow?: boolean
}

export const Indicator = ({ shadow, color = 'primary', className, ...props }: IndicatorProps) => {
  const classes = clsx(styles.container, styles[color], shadow && styles.shadow, className)

  return <Box component="span" className={classes} {...props} />
}
