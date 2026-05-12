import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import 'reflect-metadata'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InversifyContainer } from './ioc'
import { App } from './ui/App'

const appTheme = createTheme({
  typography: {
    fontFamily: 'var(--font-family-primary)'
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <InversifyContainer>
          <App />
        </InversifyContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
