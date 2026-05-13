import { Button, ButtonIcon, Icon } from 'shared/components'

import styles from './ConciseActions.module.css'
import { ConciseActionsView } from '../../model/ConcisePresenter'

type ConciseActionsProps = {
  view: ConciseActionsView
  onStart: () => void
  onPause: () => void
}

export const ConciseActions = ({ view, onStart, onPause }: ConciseActionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ButtonIcon variant="primary" iconSize={18} onClick={view.isRunning ? onPause : onStart}>
          {view.isRunning ? <Icon name="stop" /> : <Icon name="start" />}
        </ButtonIcon>

        <ButtonIcon variant="secondary" iconSize={22}>
          <Icon name="reset" />
        </ButtonIcon>

        <ButtonIcon variant="secondary" iconSize={20}>
          <Icon name="skip" />
        </ButtonIcon>
      </div>

      <Button startIcon={<Icon name="settings" size={22} />} size="small" variant="text">
        Настройки
      </Button>
    </div>
  )
}
