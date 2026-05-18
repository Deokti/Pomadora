import { Chunk, ListBasic, Slider } from 'shared/components'
import { SettingsControlValue, SettingsSection } from '../components'

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
          supportComponent={
            <SettingsControlValue value="25 мин">
              <Slider variant="control" value={25} />
            </SettingsControlValue>
          }
        />
        <Chunk
          title="Короткий перерыв"
          subtitle="Между обычными сессиями"
          supportComponent={
            <SettingsControlValue value="5 мин">
              <Slider variant="control" value={5} />
            </SettingsControlValue>
          }
        />
        <Chunk
          title="Длинный перерыв"
          subtitle="После цикла фокусов"
          supportComponent={
            <SettingsControlValue value="15 мин">
              <Slider variant="control" value={15} />
            </SettingsControlValue>
          }
        />
      </ListBasic>
    </SettingsSection>
  )
}
