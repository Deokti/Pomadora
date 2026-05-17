import { Navigate, Route, Routes } from 'react-router-dom'
import { TimerPage } from 'pages/TimerPage'
import { SettingsPage } from 'pages/SettingsPage'
import { AppRoute } from 'shared/routes/AppRoute'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoute.TIMER} element={<TimerPage />} />
      <Route path={AppRoute.SETTINGS} element={<SettingsPage />} />
      <Route path="*" element={<Navigate to={AppRoute.TIMER} replace />} />
    </Routes>
  )
}
