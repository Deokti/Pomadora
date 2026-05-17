import { Button, Flex, ProgressLine, Typography, Icon } from 'shared/components'

import type { ConciseHeaderView } from '../../model/ConcisePresenter'
import styles from './ConciseHeader.module.css'

type ConciseHeaderProps = {
  view: ConciseHeaderView
}
export const ConciseHeader = ({ view }: ConciseHeaderProps) => {
  return (
    <Flex direction="column" gap={10} justify="space-between">
      <Flex className={styles.top} align="center" justify="space-between">
        <Typography variant="eyebrow" color="subtle" uppercase>
          {view.totalDurationMin} мин · {view.totalStages} этапов
        </Typography>

        <Button
          endIcon={<Icon name="exchange" size={12} color="var(--slate-500)" />}
          size="small"
          variant="secondary"
        >
          Лаконичная (тема)
        </Button>
      </Flex>

      <Flex gap={3}>
        {view.stages.map((stage) => (
          <ProgressLine
            progress={stage.progress}
            key={stage.id}
            variant={stage.variant}
          />
        ))}
      </Flex>
    </Flex>
  )
}
