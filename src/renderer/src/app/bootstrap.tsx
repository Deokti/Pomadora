import 'reflect-metadata'
import { StyledEngineProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InversifyContainer } from './ioc'
import { App } from './ui/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <InversifyContainer>
        <App />
      </InversifyContainer>
    </StyledEngineProvider>
  </StrictMode>
)
