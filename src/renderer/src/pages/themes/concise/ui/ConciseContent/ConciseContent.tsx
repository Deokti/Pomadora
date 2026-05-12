import { Indicator, Typography } from 'shared/components'

import styles from './ConciseContent.module.css'

export const ConciseContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Indicator color="primary" pulse shadow />
        <Typography variant="eyebrow">Фокус · сессия 1 из 4</Typography>
      </div>

      <div className={styles.time}>
        <Typography variant="timerCompact" font="mono">
          25
        </Typography>
        <Typography variant="timerCompact" font="mono" color="muted">
          :
        </Typography>
        <Typography variant="timerCompact" font="mono">
          00
        </Typography>
      </div>
    </div>
  )
}
