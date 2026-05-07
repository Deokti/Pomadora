import { observer } from 'mobx-react-lite'

import './App.css'
import { Button } from 'shared/components/Button'

export const App = observer(() => {
  return (
    <div style={{ padding: 20, display: 'flex', gap: 15 }} className="app">
      <Button>Кнопка</Button>
      <Button color="danger" variant="contained">
        Кнопка
      </Button>
    </div>
  )
})
