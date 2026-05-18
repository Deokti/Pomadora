import { Chunk, ListBasic, Slider } from 'shared/components'
import { SettingsSection } from '../components'

import styles from './SettingsPageContent.module.css'

export const SettingsPageContent = () => {
  return (
    <SettingsSection
      title="Таймер"
      subtitle="Главные параметры помодоро-цикла. Изменения применяются со следующей сессии."
    >
      <ListBasic gap="large">
        <Chunk
          title="Длительность фокуса"
          subtitle="Стандарт помодоро — 25 минут"
          supportComponent={<Slider variant="control" className={styles.slider} />}
        />
        <Chunk
          title="Короткий перерыв"
          subtitle="Между обычными сессиями"
          supportComponent={<Slider variant="control" className={styles.slider} />}
        />
        <Chunk
          title="Длинный перерыв"
          subtitle="После цикла фокусов"
          supportComponent={<Slider variant="control" className={styles.slider} />}
        />
      </ListBasic>
    </SettingsSection>
  )
}
