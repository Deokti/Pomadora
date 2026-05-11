import clsx from 'clsx'
import styles from './Indicator.module.css'

type IndicatorColor = 'primary' | 'secondary'

export interface IndicatorProps {
  className?: string
  color?: IndicatorColor
  shadow?: boolean
}

export const Indicator = ({ shadow, color = 'primary', className }: IndicatorProps) => {
  const classes = clsx(styles.container, styles[color], shadow && styles.shadow, className)

  return <span className={classes} />
}
