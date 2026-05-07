import 'reflect-metadata'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InversifyContainer } from './ioc'
import { App } from './ui/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InversifyContainer>
      <App />
    </InversifyContainer>
  </StrictMode>
)
