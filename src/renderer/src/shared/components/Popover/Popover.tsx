import MuiPopover, { type PopoverProps as MuiPopoverProps } from '@mui/material/Popover'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import styles from './Popover.module.css'

export interface PopoverProps extends Omit<MuiPopoverProps, 'children' | 'elevation' | 'slotProps'> {
  children?: ReactNode
  paperClassName?: string
}

export const Popover = ({
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  },
  children,
  className,
  marginThreshold = 16,
  paperClassName,
  transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
  ...props
}: PopoverProps) => {
  return (
    <MuiPopover
      anchorOrigin={anchorOrigin}
      className={clsx(styles.root, className)}
      elevation={0}
      marginThreshold={marginThreshold}
      slotProps={{
        paper: {
          className: clsx(styles.paper, paperClassName),
        },
      }}
      transformOrigin={transformOrigin}
      {...props}
    >
      {children}
    </MuiPopover>
  )
}
