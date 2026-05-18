import { Flex, Indicator, IndicatorProps, Typography } from 'shared/components'

import type { ConciseContentView } from '../../model/ConcisePresenter'
import { PomodoroPhase } from 'entities/pomodoro'

type ConciseContentProps = {
  view: ConciseContentView
}

const conciseIndicator: Record<PomodoroPhase, IndicatorProps['color']> = {
  [PomodoroPhase.FOCUS]: 'focus',
  [PomodoroPhase.SHORT_BREAK]: 'break',
  [PomodoroPhase.LONG_BREAK]: 'long'
}

export const ConciseContent = ({ view }: ConciseContentProps) => {
  return (
    <Flex direction="column" gap="var(--default-gap)">
      <Flex align="center" gap={10}>
        <Indicator color={conciseIndicator[view.currentPhase]} pulse shadow />
        <Typography variant="eyebrow" uppercase>
          {view.statusText}
        </Typography>
      </Flex>

      <Flex align="center">
        <Typography variant="timerCompact" font="mono">
          {view.timerMinutes}
        </Typography>
        <Typography variant="timerCompact" font="mono" color="muted">
          :
        </Typography>
        <Typography variant="timerCompact" font="mono">
          {view.timerSeconds}
        </Typography>
      </Flex>
    </Flex>
  )
}
