import './App.css'
import { TimerPage } from 'pages/TimerPage'
import { FC } from 'react'

export const App: FC = () => {
  return (
    <div className="app">
      <TimerPage />
    </div>
  )
}
