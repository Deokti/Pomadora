import { observer } from 'mobx-react-lite'
import { type MouseEvent, useState } from 'react'

import './App.css'
import {
  Button,
  Card,
  Popover,
  ProgressLine,
  Typography,
  Icon,
  ButtonIcon,
  Indicator,
  Slider,
  Triangle
} from 'shared/components'

export const App = observer(() => {
  const [settingsAnchor, setSettingsAnchor] = useState<HTMLButtonElement | null>(null)

  const isSettingsOpen = Boolean(settingsAnchor)

  const handleOpenSettings = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingsAnchor(event.currentTarget)
  }

  const handleCloseSettings = () => {
    setSettingsAnchor(null)
  }

  return (
    <div className="app">
      <Card style={{ padding: 20, display: 'flex', gap: 15, flexWrap: 'wrap' }}>
        <Indicator color="primary" />
        <Indicator color="secondary" />

        <Button>Продолжить</Button>
        <Button variant="secondary">Пропустить</Button>
        <Button variant="secondary" size="small">
          Подробнее
        </Button>

        <div style={{ width: 200, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <ProgressLine progress={15} size="small" />
          <ProgressLine progress={55} size="medium" variant="secondary" selected />
          <ProgressLine progress={55} size="medium" variant="secondary" />
        </div>

        <Typography variant="timer" weight="bold">
          25:00
        </Typography>
      </Card>

      <Card style={{ padding: 20, marginTop: 20, display: 'flex', gap: 15 }}>
        <Icon name="start" color="#fff" />
        <Icon name="pause" color="#fff" />
        <Icon name="reset" color="#fff" />
        <Icon name="skip" color="#fff" size={20} />

        <ButtonIcon>
          <Icon name="settings" color="#fff" size={30} />
        </ButtonIcon>
      </Card>
      <Card
        style={{ padding: 20, marginTop: 20, display: 'flex', gap: 15, flexDirection: 'column' }}
      >
        <Slider variant="primary" defaultValue={25} />
        <Slider variant="secondary" defaultValue={35} />
      </Card>

      <Card className="popover-demo-card">
        <ButtonIcon
          aria-describedby={isSettingsOpen ? 'settings-popover' : undefined}
          aria-label="Открыть настройки"
          onClick={handleOpenSettings}
        >
          <Icon name="settings" color="#fff" size={30} />
        </ButtonIcon>

        <Popover
          id="settings-popover"
          open={isSettingsOpen}
          anchorEl={settingsAnchor}
          onClose={handleCloseSettings}
        >
          <div className="popover-demo-content">
            <Typography variant="title" color="muted">
              НАСТРОЙКИ
            </Typography>

            <Typography color="secondary">Здесь позже будет SettingsPanel.</Typography>
          </div>
        </Popover>
      </Card>

      <Card className="popover-demo-card">
        <Triangle color="primary" />
        <Triangle color="secondary" />
        <Triangle color="muted" />
        <Triangle color="accent" />
        <Triangle color="danger" />
        <Triangle color="subtle" />
      </Card>
    </div>
  )
})
