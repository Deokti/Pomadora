import { ConciseTheme } from '../../ConciseTheme'
import { FC } from 'react'
import { Typography } from 'shared/components'
import { WindowLayout } from 'widgets/WindowLayout'

export const TimerPage: FC = () => {
  return (
    <WindowLayout
      title={
        <Typography variant="label" color="muted" weight="medium">
          Помодоро
        </Typography>
      }
    >
      <ConciseTheme />
    </WindowLayout>
  )
}
