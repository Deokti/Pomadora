import { injectable } from 'inversify'

export interface TimerService {
  start(callback: () => void, intervalMs: number): void
  stop(): void
}

@injectable()
export class TimerServiceImpl implements TimerService {
  private timerId: number | null = null

  start(callback: () => void, intervalMs: number): void {
    if (this.timerId !== null) return

    this.timerId = window.setInterval(callback, intervalMs)
  }

  stop(): void {
    if (this.timerId === null) return

    window.clearInterval(this.timerId)
    this.timerId = null
  }
}
