import { ElectronAPI } from '@electron-toolkit/preload'

interface AppApi {
  windowControls: {
    minimize: () => Promise<void>
    close: () => Promise<void>
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: AppApi
  }
}
