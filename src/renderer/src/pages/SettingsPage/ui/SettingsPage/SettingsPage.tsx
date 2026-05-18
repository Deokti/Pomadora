import { Flex } from 'shared/components'
import { WindowLayout } from 'widgets/WindowLayout'
import { SettingsPageHeader } from '../SettingsPageHeader/SettingsPageHeader'
import { SettingsPageSidebar } from '../SettingsPageSidebar/SettingsPageSidebar'
import { SettingsPageContent } from '../SettingsPageContent/SettingsPageContent'

import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  return (
    <WindowLayout title={<SettingsPageHeader />}>
      <Flex className={styles.container} direction="column">
        <div className={styles.content}>
          <SettingsPageSidebar />
          <SettingsPageContent />
        </div>
      </Flex>
    </WindowLayout>
  )
}
