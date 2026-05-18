import { type FC, type ReactNode } from 'react'
import clsx from 'clsx'
import { Typography } from 'shared/components'

import styles from './SettingsSection.module.css'

export interface SettingsSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export const SettingsSection: FC<SettingsSectionProps> = ({
  title,
  subtitle,
  children,
  className
}) => {
  return (
    <section className={clsx(styles.container, className)}>
      <Typography variant="title" weight="bold">
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="label" color="muted" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}

      {children}
    </section>
  )
}
