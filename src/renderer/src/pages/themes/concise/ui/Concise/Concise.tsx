import { ConciseHeader } from '../ConciseHeader/ConciseHeader'
import { ConciseContent } from '../ConciseContent/ConciseContent'
import styles from './Concise.module.css'

export const Concise = () => {
  return (
    <div className={styles.container}>
      <ConciseHeader />
      <ConciseContent />
    </div>
  )
}
