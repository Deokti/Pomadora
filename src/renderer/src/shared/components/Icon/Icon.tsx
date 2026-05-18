import { RiResetRightLine } from 'react-icons/ri'
import { FaExchangeAlt, FaStop, FaPause, FaPlay } from 'react-icons/fa'
import { IoPlayForwardSharp } from 'react-icons/io5'
import { MdKeyboardArrowLeft } from 'react-icons/md'

import { CiSettings } from 'react-icons/ci'
import { IconType, IconBaseProps } from 'react-icons'
import { WiTime9 } from 'react-icons/wi'

export type IconName =
  | 'start'
  | 'pause'
  | 'settings'
  | 'reset'
  | 'skip'
  | 'exchange'
  | 'stop'
  | 'arrowLeft'
  | 'time'

const Icons: Record<IconName, IconType> = {
  start: FaPlay,
  pause: FaPause,
  settings: CiSettings,
  reset: RiResetRightLine,
  skip: IoPlayForwardSharp,
  exchange: FaExchangeAlt,
  stop: FaStop,
  arrowLeft: MdKeyboardArrowLeft,
  time: WiTime9
}

export interface IconProps extends IconBaseProps {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = Icons[name]

  return <IconComponent {...props} />
}
