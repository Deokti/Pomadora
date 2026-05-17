import clsx from 'clsx'
import { type CSSProperties, type ComponentPropsWithoutRef, type FC } from 'react'

type FlexAlign = CSSProperties['alignItems']
type FlexDirection = CSSProperties['flexDirection']
type FlexJustify = CSSProperties['justifyContent']
type FlexGap = CSSProperties['gap']

export interface FlexProps extends Omit<ComponentPropsWithoutRef<'div'>, 'align'> {
  align?: FlexAlign
  direction?: FlexDirection
  justify?: FlexJustify
  gap?: FlexGap
}

export const Flex: FC<FlexProps> = ({
  align,
  children,
  className,
  direction,
  gap,
  justify,
  style,
  ...props
}: FlexProps) => {
  return (
    <div
      className={clsx(className)}
      style={{
        display: 'flex',
        alignItems: align,
        flexDirection: direction,
        gap,
        justifyContent: justify,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}
