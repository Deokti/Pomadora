import clsx from 'clsx'
import { type FC, type ReactNode } from 'react'
import { Flex, Typography } from 'shared/components'

import styles from './SettingsControlValue.module.css'

export interface SettingsControlValueProps {
  value: ReactNode
  children: ReactNode
  className?: string
}

export const SettingsControlValue: FC<SettingsControlValueProps> = ({
  value,
  children,
  className
}: SettingsControlValueProps) => {
  return (
    <Flex className={clsx(styles.container, className)} align="center" gap={5}>
      <div className={styles.control}>{children}</div>
      <Typography className={styles.value} variant="label" weight="medium">
        {value}
      </Typography>
    </Flex>
  )
}
