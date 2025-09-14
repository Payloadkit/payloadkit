import React from 'react'
import { cn } from '../../utils/cn'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextAlign = 'left' | 'center' | 'right'
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

export interface BlockHeadingProps {
  text: string
  level?: HeadingLevel
  align?: TextAlign
  weight?: TextWeight
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const headingSizeMap: Record<HeadingLevel, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl',
  h2: 'text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-xl md:text-2xl lg:text-3xl',
  h5: 'text-lg md:text-xl lg:text-2xl',
  h6: 'text-base md:text-lg lg:text-xl',
}

const alignMap: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const weightMap: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

export const BlockHeading: React.FC<BlockHeadingProps> = ({
  text,
  level = 'h2',
  align = 'left',
  weight = 'bold',
  className,
  style,
  children,
}) => {
  const Component = level as keyof JSX.IntrinsicElements

  return (
    <Component
      className={cn(
        'leading-tight tracking-tight text-foreground',
        headingSizeMap[level],
        alignMap[align],
        weightMap[weight],
        className
      )}
      style={style}
    >
      {text}
      {children}
    </Component>
  )
}

export default BlockHeading