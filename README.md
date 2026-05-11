# Pomodoro Electron

Небольшое desktop-приложение для фокус-сессий: таймер, спокойный темный интерфейс, быстрые действия и UI, который не пытается украсть внимание у работы.

Базовая инфраструктура:
- Electron + Vite для desktop-сборки.
- React + TypeScript для renderer-части.
- MUI как основа для интерактивных компонентов.
- MobX-презентеры и DI через Inversify.

## Текущий UI-фундамент

Проект использует собственный слой shared-компонентов поверх MUI. Это позволяет держать визуальный язык приложения в одном месте, не размазывая MUI API по фичам.

Сейчас заведены:
- `Button` с primary/secondary вариантами и размерами.
- `ButtonIcon` для иконок-действий.
- `Card` для рабочих поверхностей.
- `Icon` для общего набора иконок.
- `Indicator` для маленьких статусных точек.
- `Popover` как общий popup-слой для будущих меню и настроек.
- `ProgressLine` для визуализации этапов сессии.
- `Slider` с primary/secondary вариантами.
- `Triangle` для маленьких указателей.
- `Typography` с вариантами для таймера, заголовков, лейблов и текста.

Цвета, радиусы, бордеры и тени лежат в `src/renderer/src/shared/tokens/styles/theme.css` как CSS-переменные. Новые цвета лучше добавлять туда как semantic-токены, а не хардкодить внутри компонентов.

Окно приложения сделано frameless: системная верхняя панель Electron скрыта, фон окна прозрачный, а скругление задается в renderer-слое. Размер окна зафиксирован в main process.

## Структура проекта

```text
src/
  main/                 Electron main process
  preload/              Безопасный bridge между Electron и renderer
  renderer/
    src/
      app/              Инициализация приложения, глобальные стили, IoC
      shared/           Переиспользуемые компоненты, токены, общая инфраструктура
      widgets/          Самостоятельные виджеты, например Timer
      views/            Варианты экранов и визуальных раскладок
```

Shared-компоненты лежат по схеме:

```text
src/renderer/src/shared/components/
  ComponentName/
    ComponentName.tsx
    ComponentName.module.css
    index.ts
```

## Быстрый старт

Установить зависимости:

```bash
npm install
```

Запустить Electron-приложение в dev-режиме:

```bash
npm run dev
```

Запустить только renderer в браузере:

```bash
npm run dev:web
```

Открыть preview production-сборки:

```bash
npm start
```

## Проверки

Проверить TypeScript:

```bash
npm run typecheck
```

Проверить отдельно Node/Electron часть:

```bash
npm run typecheck:node
```

Проверить отдельно renderer:

```bash
npm run typecheck:web
```

Запустить ESLint:

```bash
npm run lint
```

Отформатировать проект:

```bash
npm run format
```

## Сборка

Собрать приложение без упаковщика:

```bash
npm run build
```

Собрать unpacked-версию для локальной проверки:

```bash
npm run build:unpack
```

Собрать установщик под Windows:

```bash
npm run build:win
```

Собрать приложение под macOS:

```bash
npm run build:mac
```

Собрать приложение под Linux:

```bash
npm run build:linux
```

## Дальнейший план

- Pomodoro-сессии: focus, short break, long break.
- Настройки длительности циклов.
- Панель настроек поверх shared `Popover`.
- Пауза, продолжение, пропуск и сброс текущей сессии.
- Desktop-уведомления после завершения этапа.
- Мини-статистика по завершенным фокус-блокам.
- Сохранение настроек и истории между запусками.
- Автообновления через `electron-updater`.

## Идея проекта

Pomodoro Electron задуман по причине говорливых друзей.
