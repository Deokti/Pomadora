import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        app: resolve('src/renderer/src/app'),
        entities: resolve('src/renderer/src/entities'),
        features: resolve('src/renderer/src/features'),
        pages: resolve('src/renderer/src/pages'),
        shared: resolve('src/renderer/src/shared'),
        widgets: resolve('src/renderer/src/widgets')
      }
    },
    plugins: [react(), tailwindcss()]
  }
})
