import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: resolve(__dirname, 'src/renderer'),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src/renderer/src/app'),
      entities: resolve(__dirname, 'src/renderer/src/entities'),
      features: resolve(__dirname, 'src/renderer/src/features'),
      pages: resolve(__dirname, 'src/renderer/src/pages'),
      shared: resolve(__dirname, 'src/renderer/src/shared'),
      widgets: resolve(__dirname, 'src/renderer/src/widgets')
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist-web'),
    emptyOutDir: true
  }
})
