import { type FC, type ReactNode } from 'react'
import { Flex } from 'shared/components'

import styles from './WindowLayout.module.css'

export interface WindowLayoutProps {
  title: ReactNode
  children: ReactNode
}

export const WindowLayout: FC<WindowLayoutProps> = ({ title, children }: WindowLayoutProps) => {
  const handleMinimize = () => {
    window.api.windowControls.minimize()
  }

  const handleClose = () => {
    window.api.windowControls.close()
  }

  return (
    <Flex className={styles.container} direction="column">
      <header className={styles.header}>
        <div className={styles.title}>{title}</div>

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

      <div className={styles.content}>{children}</div>
    </Flex>
  )
}
