import { ButtonIcon, Icon, ProgressLine, Typography } from 'shared/components'

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
          variant="secondary"
        />
      )
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.top}>
          <Typography variant="eyebrow" color="subtle">
            Рабочий сеанс
          </Typography>
          <Typography variant="eyebrow" color="subtle" font="mono">
            130 мин · 8 этапов
          </Typography>
        </div>

        {<div className={styles.steps}>{renderSteps}</div>}
      </div>

      <ButtonIcon>
        <Icon name="settings" />
      </ButtonIcon>
    </div>
  )
}
