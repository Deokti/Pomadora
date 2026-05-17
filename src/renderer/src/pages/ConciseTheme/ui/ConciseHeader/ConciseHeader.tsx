import { Button, ProgressLine, Typography, Icon } from 'shared/components'

import type { ConciseHeaderView } from '../../model/ConcisePresenter'
import styles from './ConciseHeader.module.css'

type ConciseHeaderProps = {
  view: ConciseHeaderView
}
export const ConciseHeader = ({ view }: ConciseHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Typography variant="eyebrow" color="subtle">
          {view.totalDurationMin} мин · {view.totalStages} этапов
        </Typography>

        <Button
          endIcon={<Icon name="exchange" size={12} color="var(--slate-500)" />}
          size="small"
          variant="secondary"
        >
          Лаконичная (тема)
        </Button>
      </div>

      <div className={styles.steps}>
        {view.stages.map((stage) => (
          <ProgressLine
            progress={stage.progress}
            key={stage.id}
            variant={stage.variant}
          />
        ))}
      </div>
    </div>
  )
}
