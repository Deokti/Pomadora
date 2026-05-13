import { Indicator, Typography } from 'shared/components'

import type { ConciseContentView } from '../../model/ConcisePresenter'
import styles from './ConciseContent.module.css'

type ConciseContentProps = {
  view: ConciseContentView
}

export const ConciseContent = ({ view }: ConciseContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Indicator color="primary" pulse shadow />
        <Typography variant="eyebrow">{view.statusText}</Typography>
      </div>

      <div className={styles.time}>
        <Typography variant="timerCompact" font="mono">
          {view.timerMinutes}
        </Typography>
        <Typography variant="timerCompact" font="mono" color="muted">
          :
        </Typography>
        <Typography variant="timerCompact" font="mono">
          {view.timerSeconds}
        </Typography>
      </div>
    </div>
  )
}
