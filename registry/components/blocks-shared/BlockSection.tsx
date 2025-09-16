import React from 'react'
import { cn } from '../../utils/cn'

export type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type SectionHeight = 'auto' | 'screen' | 'min-screen'

export interface BlockSectionProps {
  children: React.ReactNode
  paddingTop?: SpacingSize
  paddingBottom?: SpacingSize
  paddingX?: SpacingSize
  height?: SectionHeight
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  className?: string
  [key: string]: any // Allow additional props to be passed through
}

const spacingMap: Record<SpacingSize, string> = {
  none: '',
  xs: 'py-4',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20',
  '2xl': 'py-24',
}

const paddingTopMap: Record<SpacingSize, string> = {
  none: '',
  xs: 'pt-4',
  sm: 'pt-8',
  md: 'pt-12',
  lg: 'pt-16',
  xl: 'pt-20',
  '2xl': 'pt-24',
}

const paddingBottomMap: Record<SpacingSize, string> = {
  none: '',
  xs: 'pb-4',
  sm: 'pb-8',
  md: 'pb-12',
  lg: 'pb-16',
  xl: 'pb-20',
  '2xl': 'pb-24',
}

const paddingXMap: Record<SpacingSize, string> = {
  none: '',
  xs: 'px-2',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-12',
  '2xl': 'px-16',
}

const containerSizeMap = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-none',
}

const heightMap: Record<SectionHeight, string> = {
  auto: '',
  screen: 'min-h-screen',
  'min-screen': 'min-h-screen',
}

export const BlockSection: React.FC<BlockSectionProps> = ({
  children,
  paddingTop = 'lg',
  paddingBottom = 'lg',
  paddingX = 'md',
  height = 'auto',
  containerSize = 'xl',
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'w-full',
        heightMap[height],
        paddingTopMap[paddingTop],
        paddingBottomMap[paddingBottom],
        paddingXMap[paddingX],
        className
      )}
      {...props}
    >
      <div className={cn('mx-auto', containerSizeMap[containerSize])}>
        {children}
      </div>
    </section>
  )
}

export default BlockSection