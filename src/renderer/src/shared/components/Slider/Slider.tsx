import MuiSlider, { type SliderProps as MuiSliderProps } from '@mui/material/Slider'
import clsx from 'clsx'
import { type FC } from 'react'

import styles from './Slider.module.css'

export interface SliderProps extends Omit<MuiSliderProps, 'className' | 'color' | 'size'> {
  className?: string
}

export const Slider: FC<SliderProps> = ({
  className,
  step = 0.1,
  ...props
}: SliderProps) => {
  return (
    <MuiSlider
      className={clsx(styles.container, className)}
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
