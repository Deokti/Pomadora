import { Button, ButtonIcon, Flex, Icon } from 'shared/components'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from 'shared/routes/AppRoute'

import { ConciseActionsView } from '../../model/ConcisePresenter'

type ConciseActionsProps = {
  view: ConciseActionsView
  onStart: () => void
  onPause: () => void
  onReset: () => void
  onFinish: () => void
}

export const ConciseActions = ({
  view,
  onStart,
  onPause,
  onReset,
  onFinish
}: ConciseActionsProps) => {
  const navigate = useNavigate()

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" gap={12}>
        <ButtonIcon variant="primary" iconSize={18} onClick={view.isRunning ? onPause : onStart}>
          {view.isRunning ? <Icon name="pause" /> : <Icon name="start" />}
        </ButtonIcon>

        <ButtonIcon variant="secondary" iconSize={22} onClick={onReset}>
          <Icon name="reset" />
        </ButtonIcon>

        <ButtonIcon variant="secondary" iconSize={20} onClick={onFinish}>
          <Icon name="skip" />
        </ButtonIcon>
      </Flex>

      <Button
        startIcon={<Icon name="settings" size={22} />}
        size="small"
        variant="text"
        onClick={() => navigate(AppRoute.SETTINGS)}
      >
        Настройки
      </Button>
    </Flex>
  )
}
