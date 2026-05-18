import { Cell, ListBasic } from 'shared/components'

import styles from './SettingsPageSidebar.module.css'

export const SettingsPageSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ListBasic gap="small">
        <Cell label="Таймер" icon="time" selected />
        <Cell label="Горячие клавиши" icon="keyboard" />
        <Cell label="О программе" icon="warningCircle" />
      </ListBasic>
    </aside>
  )
}
