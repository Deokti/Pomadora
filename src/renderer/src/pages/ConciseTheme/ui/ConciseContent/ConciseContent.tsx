import { Indicator, IndicatorProps, Typography } from 'shared/components'

import type { ConciseContentView } from '../../model/ConcisePresenter'
import styles from './ConciseContent.module.css'
import { PomodoroPhase } from 'entities/pomodoro'

type ConciseContentProps = {
  view: ConciseContentView
}

const conciseIndicator: Record<PomodoroPhase, IndicatorProps['color']> = {
  [PomodoroPhase.FOCUS]: 'focus',
  [PomodoroPhase.SHORT_BREAK]: 'break',
  [PomodoroPhase.LONG_BREAK]: 'long'
}

export const ConciseContent = ({ view }: ConciseContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Indicator color={conciseIndicator[view.currentPhase]} pulse shadow />
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
