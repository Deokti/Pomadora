import { Typography } from 'shared/components'

import styles from './ConciseWindowHeader.module.css'

export const ConciseWindowHeader = () => {
  const handleMinimize = () => {
    window.api.windowControls.minimize()
  }

  const handleClose = () => {
    window.api.windowControls.close()
  }

  return (
    <header className={styles.container}>
      <Typography className={styles.title} variant="label" color="muted" weight="medium">
        Помодоро
      </Typography>

      <div className={styles.controls}>
        <button
          className={styles.control}
          type="button"
          onClick={handleMinimize}
          aria-label="Свернуть окно"
        >
          <span className={styles.minimizeIcon} />
        </button>

        <button
          className={styles.control}
          type="button"
          onClick={handleClose}
          aria-label="Закрыть окно"
        >
          <span className={styles.closeIcon} />
        </button>
      </div>
    </header>
  )
}
