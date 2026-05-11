import { observer } from 'mobx-react-lite'

import './App.css'
import {
  Button,
  Card,
  ProgressLine,
  Typography,
  Icon,
  ButtonIcon,
  Indicator,
  Slider
} from 'shared/components'

export const App = observer(() => {
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
    </div>
  )
})
