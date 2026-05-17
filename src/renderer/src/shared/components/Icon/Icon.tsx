import { RiResetRightLine } from 'react-icons/ri'
import { FaArrowLeft, FaExchangeAlt, FaStop, FaPause, FaPlay } from 'react-icons/fa'
import { IoPlayForwardSharp } from 'react-icons/io5'

import { CiSettings } from 'react-icons/ci'
import { IconType, IconBaseProps } from 'react-icons'

export type IconName =
  | 'start'
  | 'pause'
  | 'settings'
  | 'reset'
  | 'skip'
  | 'exchange'
  | 'stop'
  | 'arrow-left'

const Icons: Record<IconName, IconType> = {
  start: FaPlay,
  pause: FaPause,
  settings: CiSettings,
  reset: RiResetRightLine,
  skip: IoPlayForwardSharp,
  exchange: FaExchangeAlt,
  stop: FaStop,
  'arrow-left': FaArrowLeft
}

export interface IconProps extends IconBaseProps {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = Icons[name]

  return <IconComponent {...props} />
}
