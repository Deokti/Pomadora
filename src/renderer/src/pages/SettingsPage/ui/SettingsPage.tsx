import { useNavigate } from 'react-router-dom'
import { AppRoute } from 'shared/routes/AppRoute'
import { Button, Chunk, Flex, Icon, Typography } from 'shared/components'

import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  const navigate = useNavigate()

  return (
    <Flex className={styles.container} direction="column">
      <Flex className={styles.header} align="center" justify="space-between" gap={24}>
        <Typography variant="title" color="muted">
          Header
        </Typography>

        <Button
          startIcon={<Icon name="arrow-left" size={18} />}
          size="small"
          variant="text"
          onClick={() => navigate(AppRoute.TIMER)}
        >
          Назад
        </Button>
      </Flex>

      <div className={styles.content}>
        <aside className={styles.sidebar}>Sidebar</aside>

        <section className={styles.section}>
          <Chunk
            title="Длительность фокуса"
            subtitle="Стандарт помодоро — 25 минут"
            supportComponent={<Icon name="settings" color="#FFF" size={25} />}
          />
        </section>
      </div>
    </Flex>
  )
}
