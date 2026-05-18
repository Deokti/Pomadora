import './App.css'
import { FC } from 'react'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from 'app/router'

export const App: FC = () => {
  return (
    <div className="app">
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  )
}
