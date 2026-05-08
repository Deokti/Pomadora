# Pomodoro Electron

Небольшое desktop-приложение для фокус-сессий: таймер, спокойный темный интерфейс, быстрые действия и UI, который не пытается украсть внимание у работы.

Базовой инфраструктура:
- Electron/Vite-сборка,
- MobX-презентеры и DI через Inversify.

## Текущий UI-фундамент

В проекте заведены базовые компоненты:
- `Button` с primary/secondary вариантами и размерами.
- `Card` для рабочих поверхностей.
- `ProgressLine` для визуализации прогресса сессии.
- `Typography` с отдельным вариантом под таймер.
- `theme.css` с примитивами и семантическими CSS-переменными.

Это хорошая точка старта для аккуратного интерфейса таймера: без лишнего шума, с понятной иерархией и повторяемыми компонентами.

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
- Пауза, продолжение, пропуск и сброс текущей сессии.
- Desktop-уведомления после завершения этапа.
- Мини-статистика по завершенным фокус-блокам.
- Сохранение настроек и истории между запусками.
- Автообновления через `electron-updater`.

## Идея проекта

Pomodoro Electron задуман по причине говорливых друзей.
