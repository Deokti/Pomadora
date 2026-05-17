import { useNavigate } from 'react-router-dom'
import { AppRoute } from 'shared/routes/AppRoute'
import { Button, Chunk, Icon, Typography } from 'shared/components'

import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
      </div>

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
    </div>
  )
}
