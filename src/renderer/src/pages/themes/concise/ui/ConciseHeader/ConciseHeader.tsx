import { Button, ProgressLine, Typography, Icon } from 'shared/components'

import styles from './ConciseHeader.module.css'
import { useMemo } from 'react'

export const ConciseHeader = () => {
  const renderSteps = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7].map((item) => {
      return (
        <ProgressLine
          progress={item === 1 ? 34 : 0}
          selected={item === 1}
          key={item}
          variant="primary"
        />
      )
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Typography variant="eyebrow" color="subtle">
          130 мин · 8 этапов
        </Typography>

        <Button
          endIcon={<Icon name="exchange" size={12} color="var(--slate-500)" />}
          size="small"
          variant="secondary"
        >
          Фокус
        </Button>
      </div>

      {<div className={styles.steps}>{renderSteps}</div>}
    </div>
  )
}
