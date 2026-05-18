import { Flex, Slider, Typography } from 'shared/components'

import type { ConciseSliderView } from '../../model/ConcisePresenter'
import styles from './ConciseSlider.module.css'

type ConciseSliderProps = {
  view: ConciseSliderView
}

export const ConciseSlider = ({ view }: ConciseSliderProps) => {
  return (
    <div className={styles.container}>
      <Slider className={styles.slider} value={view.progress} />

      <Flex className={styles.time} align="center" justify="space-between">
        <Typography color="muted" variant="label">
          {view.elapsedFormatted}
        </Typography>
        <Typography color="muted" variant="label">
          {view.durationFormatted}
        </Typography>
      </Flex>
    </div>
  )
}
