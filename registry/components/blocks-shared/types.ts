export interface ColorFieldValue {
  type: 'theme' | 'custom'
  theme?: string
  custom?: string
}

export interface BackgroundFieldValue {
  type: 'none' | 'color' | 'gradient' | 'image'
  color?: ColorFieldValue | string
  image?: string | { url: string }
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl'
  gradientStops?: {
    color: ColorFieldValue | string
    position?: string
  }[]
  overlay?: boolean
  overlayColor?: ColorFieldValue | string
  overlayOpacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90'
}

// Layout types
export type GridLayout =
  | 'single'
  | 'two-column'
  | 'grid-2'
  | 'grid-3'
  | 'grid-4'
  | 'list'
  | 'masonry'

export type GapSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type SectionHeight = 'auto' | 'screen' | 'min-screen'

// Typography types
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
export type TextAlign = 'left' | 'center' | 'right' | 'justify'
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

// Component props interfaces
export interface BaseBlockProps {
  className?: string
  style?: React.CSSProperties
}

export interface BlockProps extends BaseBlockProps {
  background?: BackgroundFieldValue
  paddingTop?: SpacingSize
  paddingBottom?: SpacingSize
  height?: SectionHeight
}