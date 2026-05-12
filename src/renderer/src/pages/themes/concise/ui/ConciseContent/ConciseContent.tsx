import { Indicator, Slider, Typography } from 'shared/components'

import styles from './ConciseContent.module.css'

export const ConciseContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Indicator color="primary" shadow />
        <Typography variant="labelWide" color="subtle">
          Фокус · на паузе
        </Typography>
      </div>

      <Typography className={styles.timer} variant="timer" font="mono">
        25:00
      </Typography>

      <div className={styles.bottom}>
        <Slider className={styles.slider} variant="secondary" defaultValue={25} />

        <div className={styles.time}>
          <Typography color="muted" font="mono">
            00:00
          </Typography>
          <Typography color="muted" font="mono">
            25:00
          </Typography>
        </div>
      </div>
    </div>
  )
}
