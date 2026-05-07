import { observer } from 'mobx-react-lite'
import { Timer } from 'widgets/Timer'

export const App = observer(() => {
  return (
    <div>
      <Timer timerId="main" />
    </div>
  )
})
