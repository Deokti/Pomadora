import Box, { type BoxProps } from '@mui/material/Box'
import clsx from 'clsx'

import styles from './Triangle.module.css'

type TriangleColor = 'primary' | 'secondary' | 'muted' | 'subtle' | 'accent' | 'danger' | 'inherit'

export interface TriangleProps extends Omit<BoxProps, 'color'> {
  className?: string
  color?: TriangleColor
}

export const Triangle = ({ className, color = 'accent', ...props }: TriangleProps) => {
  return (
    <Box component="span" className={clsx(styles.container, styles[color], className)} {...props} />
  )
}
