import { Flex, Icon, IconName, Typography } from 'shared/components'

import styles from './Cell.module.css'
import { FC } from 'react'
import clsx from 'clsx'

const DEFAULT_ICON_SIZE = 18

export interface CellProps {
  label: string
  icon: IconName
  iconSize?: number
  selected?: boolean
}

export const Cell: FC<CellProps> = ({
  icon,
  label,
  iconSize = DEFAULT_ICON_SIZE,
  selected
}: CellProps) => {
  const classNames = clsx(styles.container, selected && styles.selected)
  return (
    <Flex className={classNames} gap={12} align="center">
      <Icon name={icon} size={iconSize} className={styles.icon} />
      <Typography variant="button" weight="medium" className={styles.text}>
        {label}
      </Typography>
    </Flex>
  )
}
