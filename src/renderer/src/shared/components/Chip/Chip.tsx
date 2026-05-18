import { FC } from 'react'
import clsx from 'clsx'

import styles from './Chip.module.css'

export interface ChipProps {
  label: string
  className?: string
}

export const Chip: FC<ChipProps> = ({ label, className }: ChipProps) => {
  return <div className={clsx(styles.container, className)}>{label}</div>
}
