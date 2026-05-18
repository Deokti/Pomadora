import MuiSwitch, { type SwitchProps as MuiSwitchProps } from '@mui/material/Switch'
import clsx from 'clsx'
import { type FC } from 'react'

import styles from './Switch.module.css'

export interface SwitchProps extends Omit<MuiSwitchProps, 'className' | 'color' | 'size'> {
  className?: string
}

export const Switch: FC<SwitchProps> = ({ className, ...props }: SwitchProps) => {
  return (
    <MuiSwitch
      className={clsx(styles.container, className)}
      classes={{
        switchBase: styles.switchBase,
        track: styles.track,
        thumb: styles.thumb
      }}
      disableRipple
      {...props}
    />
  )
}
