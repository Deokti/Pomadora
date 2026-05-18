import { ConciseHeader } from '../ConciseHeader/ConciseHeader'
import { ConciseContent } from '../ConciseContent/ConciseContent'
import { ConciseActions } from '../ConciseActions/ConciseActions'
import { ConciseSlider } from '../ConciseSlider/ConciseSlider'
import styles from './Concise.module.css'
import { observer } from 'mobx-react-lite'
import { useConcisePresenter } from '../../model/hooks/useConcisePresenter'
import { Flex } from 'shared/components'

export const ConciseTheme = observer(() => {
  const presenter = useConcisePresenter()

  return (
    <Flex className={styles.container} direction="column" gap="var(--default-gap)">
      <ConciseHeader view={presenter.header} />
      <ConciseContent view={presenter.content} />
      <ConciseSlider view={presenter.slider} />
      <ConciseActions
        view={presenter.actions}
        onStart={presenter.start}
        onPause={presenter.pause}
        onReset={presenter.reset}
        onFinish={presenter.finish}
      />
    </Flex>
  )
})
