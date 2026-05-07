import { observer } from 'mobx-react-lite'
import { makeAutoObservable } from 'mobx'

class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  increaseTimer(): void {
    this.secondsPassed += 1
  }
}

const myTimer = new Timer()

export const App = observer(() => {
  return (
    <div>
      <div>{myTimer.secondsPassed}</div>
      <button onClick={myTimer.increaseTimer}>Нажать</button>
    </div>
  )
})
