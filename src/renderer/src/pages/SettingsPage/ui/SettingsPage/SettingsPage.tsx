import { Flex } from 'shared/components'
import { SettingsPageHeader } from '../SettingsPageHeader/SettingsPageHeader'
import { SettingsPageSidebar } from '../SettingsPageSidebar/SettingsPageSidebar'
import { SettingsPageContent } from '../SettingsPageContent/SettingsPageContent'

import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  return (
    <Flex className={styles.container} direction="column">
      <SettingsPageHeader />

      <div className={styles.content}>
        <SettingsPageSidebar />
        <SettingsPageContent />
      </div>
    </Flex>
  )
}
