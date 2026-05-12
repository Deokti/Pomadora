import { Slider, Typography } from 'shared/components'

import styles from './ConciseSlider.module.css'

export const ConciseSlider = () => {
  return (
    <div className={styles.container}>
      <Slider className={styles.slider} defaultValue={25} />

      <div className={styles.time}>
        <Typography color="muted" variant="label">
          00:00
        </Typography>
        <Typography color="muted" variant="label">
          25:00
        </Typography>
      </div>
    </div>
  )
}
