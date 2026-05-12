import { ButtonIcon, Icon } from 'shared/components'

import styles from './ConciseActions.module.css'

export const ConciseActions = () => {
  return (
    <div className={styles.container}>
      <ButtonIcon variant="main" size="medium" iconSize={14}>
        <Icon name="start" />
      </ButtonIcon>

      <ButtonIcon variant="circle" size="small" iconSize={18}>
        <Icon name="reset" />
      </ButtonIcon>

      <ButtonIcon variant="circle" size="small" iconSize={16}>
        <Icon name="skip" />
      </ButtonIcon>
    </div>
  )
}
