import { FC, ReactNode } from 'react'
import { Flex } from 'shared/components'
import clsx from 'clsx'

import styles from './ListBasic.module.css'

export type ListBasicGap = 'none' | 'small' | 'medium' | 'large'

export interface ListBasicProps {
  className?: string
  children?: ReactNode
  gap?: ListBasicGap
}

const getGapConfig: Record<ListBasicGap, number> = {
  none: 0,
  small: 2,
  medium: 6,
  large: 14
}

export const ListBasic: FC<ListBasicProps> = ({
  children,
  className,
  gap = 'none'
}: ListBasicProps) => {
  const classNames = clsx(styles.container, className)
  const gapConfig = getGapConfig[gap]

  return (
    <Flex direction="column" className={classNames} gap={gapConfig}>
      {children}
    </Flex>
  )
}
