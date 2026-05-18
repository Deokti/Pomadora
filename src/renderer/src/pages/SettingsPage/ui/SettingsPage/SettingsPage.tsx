import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from 'shared/routes/AppRoute'
import { Button, Cell, Chip, Chunk, Flex, Icon, ListBasic, Typography } from 'shared/components'
import { useKeyDown } from 'shared/hooks'

import styles from './SettingsPage.module.css'

export const SettingsPage = () => {
  const navigate = useNavigate()
  const navigateToTimer = useCallback(() => {
    navigate(AppRoute.TIMER)
  }, [navigate])

  useKeyDown('Escape', navigateToTimer)

  return (
    <Flex className={styles.container} direction="column">
      <Flex className={styles.header} align="center" justify="space-between" gap={24}>
        <Button
          startIcon={<Icon name="arrowLeft" size={23} />}
          hoverEffect="pill-shift"
          size="small"
          variant="text"
          onClick={navigateToTimer}
        >
          <Typography variant="button" weight="semibold" className={styles.title}>
            Настройки
          </Typography>
        </Button>

        <Flex align="center" gap={8}>
          <Typography color="muted" uppercase variant="eyebrow" weight="medium">
            Выход
          </Typography>
          <Chip label="Esc" />
        </Flex>
      </Flex>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ListBasic gap="small">
            <Cell label="Таймер" icon="time" selected />
            <Cell label="Горячие клавиши" icon="keyboard" />
            <Cell label="О программе" icon="warningCircle" />
          </ListBasic>
        </aside>

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
