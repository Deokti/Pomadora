import { type FC, type ReactNode } from 'react'

import { Flex } from '../Flex'
import { Typography } from '../Typography'

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
    <Flex className={className} align="center" justify="space-between">
      <Flex direction="column" gap={2}>
        <Typography color="primary" variant="label" weight="medium">
          {title}
        </Typography>
        <Typography color="muted" variant="eyebrow">
          {subtitle}
        </Typography>
      </Flex>

      {supportComponent}
    </Flex>
  )
}
