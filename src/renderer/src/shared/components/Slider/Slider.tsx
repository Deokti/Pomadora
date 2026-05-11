import { Slider as HerouiSlider, type SliderProps as HerouiSliderProps } from '@heroui/react'
import clsx from 'clsx'
import { type FC } from 'react'

import styles from './Slider.module.css'

type SliderVariant = 'primary' | 'secondary'

export interface SliderProps extends Omit<HerouiSliderProps, 'children' | 'className'> {
  className?: string
  variant?: SliderVariant
}

export const Slider: FC<SliderProps> = ({
  className,
  variant = 'primary',
  ...props
}: SliderProps) => {
  return (
    <HerouiSlider
      className={clsx(styles.container, styles[variant], className)}
      {...props}
      defaultValue={10}
    >
      <HerouiSlider.Track className={styles.track}>
        <HerouiSlider.Fill className={styles.fill} />
        <HerouiSlider.Thumb className={styles.thumb} />
      </HerouiSlider.Track>
    </HerouiSlider>
  )
}
