import { ButtonIcon, Icon } from 'shared/components'

import styles from './ConciseActions.module.css'

export const ConciseActions = () => {
  return (
    <div className={styles.container}>
      <ButtonIcon variant="primary" iconSize={18}>
        <Icon name="start" />
      </ButtonIcon>

      <ButtonIcon variant="secondary" iconSize={22}>
        <Icon name="reset" />
      </ButtonIcon>

      <ButtonIcon variant="secondary" iconSize={20}>
        <Icon name="skip" />
      </ButtonIcon>
    </div>
  )
}
