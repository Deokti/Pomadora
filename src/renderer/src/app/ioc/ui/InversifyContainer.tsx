import { ReactNode } from 'react'
import { Provider } from 'inversify-react'
import { iocStore } from '../model/IocStore'

interface InversifyContainerProps {
  children: ReactNode
}

export const InversifyContainer = ({ children }: InversifyContainerProps) => {
  return <Provider container={iocStore.container}>{children}</Provider>
}
