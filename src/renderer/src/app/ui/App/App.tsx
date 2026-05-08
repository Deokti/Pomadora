import { observer } from 'mobx-react-lite'

import './App.css'
import { Button, Card } from 'shared/components'

export const App = observer(() => {
  return (
    <div style={{ padding: 20, display: 'flex', gap: 15 }} className="app">
      <Card>
        <Button>Продолжить</Button>
        <Button variant="secondary">Пропустить</Button>
        <Button variant="secondary" size="small">
          Подробнее
        </Button>
      </Card>
    </div>
  )
})
