import MuiSlider, { type SliderProps as MuiSliderProps } from '@mui/material/Slider'
import clsx from 'clsx'
import { type FC } from 'react'

import styles from './Slider.module.css'

export type SliderVariant = 'progress' | 'control'

export interface SliderProps extends Omit<MuiSliderProps, 'className' | 'color' | 'size'> {
  className?: string
  variant?: SliderVariant
}

export const Slider: FC<SliderProps> = ({
  className,
  step = 0.1,
  variant = 'progress',
  ...props
}: SliderProps) => {
  return (
    <MuiSlider
      className={clsx(styles.container, styles[variant], className)}
      classes={{
        rail: styles.rail,
        track: styles.track,
        thumb: styles.thumb
      }}
      step={step}
      {...props}
    />
  )
}
