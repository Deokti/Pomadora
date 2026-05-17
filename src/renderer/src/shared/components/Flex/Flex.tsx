import clsx from 'clsx'
import { type CSSProperties, type ComponentPropsWithoutRef, type FC } from 'react'

type FlexAlign = CSSProperties['alignItems']
type FlexJustify = CSSProperties['justifyContent']
type FlexGap = CSSProperties['gap']

export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  align?: FlexAlign
  justify?: FlexJustify
  gap?: FlexGap
}

export const Flex: FC<FlexProps> = ({
  align,
  children,
  className,
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
