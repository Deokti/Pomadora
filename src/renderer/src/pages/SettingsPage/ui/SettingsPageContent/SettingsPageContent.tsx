import { useState } from 'react'
import { Chunk, ListBasic, Slider, Switch, NumberStepper } from 'shared/components'
import { SettingsControlValue, SettingsSection } from '../components'

export const SettingsPageContent = () => {
  const [focusesBeforeLongBreak, setFocusesBeforeLongBreak] = useState(4)

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
        <Chunk
          title="Фокусов до длинного перерыва"
          subtitle="Классическая схема — 4 фокуса"
          supportComponent={
            <NumberStepper
              value={focusesBeforeLongBreak}
              min={1}
              max={8}
              onChange={setFocusesBeforeLongBreak}
            />
          }
        />
        <Chunk
          title="Автостарт перерывов"
          subtitle="Сразу после окончания фокуса"
          supportComponent={<Switch />}
        />
        <Chunk
          title="Автостарт следующего фокуса"
          subtitle="Без ожидания клика после перерыва"
          supportComponent={<Switch />}
        />
      </ListBasic>
    </SettingsSection>
  )
}
