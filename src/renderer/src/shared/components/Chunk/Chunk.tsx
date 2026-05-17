import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'

import styles from './Chunk.module.css'
import { Typography } from 'shared/components'

export interface ChunkProps {
  title: string
  subtitle: string
  className?: string
  supportComponent?: ReactNode
}

export const Chunk: FC<ChunkProps> = ({
  title,
  subtitle,
  supportComponent,
  className
}: ChunkProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.flex}>
        <Typography color="primary" variant="label" weight="medium">
          {title}
        </Typography>
        <Typography color="muted" variant="eyebrow">
          {subtitle}
        </Typography>
      </div>

      {supportComponent}
    </div>
  )
}
