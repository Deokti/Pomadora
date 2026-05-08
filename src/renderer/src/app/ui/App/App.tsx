import { observer } from 'mobx-react-lite'

import './App.css'
import { Button, Card, ProgressLine, Typography } from 'shared/components'

export const App = observer(() => {
  return (
    <div className="app">
      <Card style={{ padding: 20, display: 'flex', gap: 15 }}>
        <Button>Продолжить</Button>
        <Button variant="secondary">Пропустить</Button>
        <Button variant="secondary" size="small">
          Подробнее
        </Button>
        <ProgressLine progress={15} size="small" />
        <ProgressLine progress={55} size="medium" variant="secondary" selected />
        <ProgressLine progress={55} size="medium" variant="secondary" />

        <Typography variant="timer" weight="bold">
          25:00
        </Typography>
      </Card>
    </div>
  )
})
