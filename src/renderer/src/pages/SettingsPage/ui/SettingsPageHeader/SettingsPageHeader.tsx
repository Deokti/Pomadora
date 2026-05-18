import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from 'shared/routes/AppRoute'
import { Button, Flex, Icon, Typography } from 'shared/components'
import { useKeyDown } from 'shared/hooks'

import styles from './SettingsPageHeader.module.css'

export const SettingsPageHeader = () => {
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
      </Flex>
    </Flex>
  )
}
