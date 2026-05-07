import { observer } from 'mobx-react-lite'
import { useIocProvider } from 'shared/ioc'
import { iocProvider } from '../di/iocProvider'
import { modules } from '../di/modules'
import { TimerPresenter } from '../model/TimerPresenter'

type TimerProps = {
  timerId?: string
}

export const Timer = observer(({ timerId = 'default' }: TimerProps) => {
  const { useInjection } = useIocProvider(iocProvider, modules, { keys: [timerId] })
  const presenter = useInjection(TimerPresenter)

  return (
    <div>
      <div>{presenter.secondsPassed}</div>
      <button onClick={presenter.increaseTimer}>Нажать</button>
    </div>
  )
})
