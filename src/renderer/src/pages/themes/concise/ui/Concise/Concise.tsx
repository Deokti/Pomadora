import { ConciseHeader } from '../ConciseHeader/ConciseHeader'
import { ConciseContent } from '../ConciseContent/ConciseContent'
import { ConciseActions } from '../ConciseActions/ConciseActions'
import { ConciseSlider } from '../ConciseSlider/ConciseSlider'
import styles from './Concise.module.css'
import { observer } from 'mobx-react-lite'
import { useConcisePresenter } from '../../model/hooks/useConcisePresenter'

export const Concise = observer(() => {
  const presenter = useConcisePresenter()

  return (
    <div className={styles.container}>
      <ConciseHeader view={presenter.header} />
      <ConciseContent view={presenter.content} />
      <ConciseSlider view={presenter.slider} />
      <ConciseActions
        view={presenter.actions}
        onStart={presenter.start}
        onPause={presenter.pause}
      />
    </div>
  )
})
