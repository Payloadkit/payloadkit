import React from 'react'
import { cn } from '../../utils/cn'

export type GridLayout =
  | 'single'
  | 'two-column'
  | 'grid-2'
  | 'grid-3'
  | 'grid-4'
  | 'list'
  | 'masonry'

export type GapSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BlockLayoutProps {
  children: React.ReactNode
  layout: GridLayout
  gap?: GapSize
  equalHeight?: boolean
  className?: string
}

const layoutMap: Record<GridLayout, string> = {
  single: 'grid grid-cols-1',
  'two-column': 'grid grid-cols-1 lg:grid-cols-2',
  'grid-2': 'grid grid-cols-1 md:grid-cols-2',
  'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  'grid-4': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  list: 'flex flex-col',
  masonry: 'columns-1 md:columns-2 lg:columns-3',
}

const gapMap: Record<GapSize, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

export const BlockLayout: React.FC<BlockLayoutProps> = ({
  children,
  layout,
  gap = 'md',
  equalHeight = false,
  className,
}) => {
  const isGrid = layout !== 'list' && layout !== 'masonry'
  const baseClasses = layoutMap[layout]

  return (
    <div
      className={cn(
        baseClasses,
        gapMap[gap],
        equalHeight && isGrid && 'items-stretch',
        layout === 'masonry' && 'space-y-4',
        className
      )}
    >
      {children}
    </div>
  )
}

export const useLayoutInfo = (layout: GridLayout) => {
  const isGrid = layout !== 'list' && layout !== 'masonry'
  const isList = layout === 'list'
  const isMasonry = layout === 'masonry'

  const getColumns = (): number => {
    switch (layout) {
      case 'grid-4':
        return 4
      case 'grid-3':
        return 3
      case 'grid-2':
      case 'two-column':
        return 2
      default:
        return 1
    }
  }

  return {
    isGrid,
    isList,
    isMasonry,
    columns: getColumns(),
  }
}

export default BlockLayout