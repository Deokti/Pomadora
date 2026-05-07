import { Container } from 'inversify'

class IocStore {
  container = new Container()
}

export const iocStore = new IocStore()
