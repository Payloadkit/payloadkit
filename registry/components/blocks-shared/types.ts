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

// Types pour Rich Text PayloadCMS avec Lexical
export interface LexicalNode {
  type: string
  version: number
  [key: string]: any // Lexical nodes peuvent avoir des propriétés variables
}

export interface LexicalTextNode extends LexicalNode {
  type: 'text'
  text: string
  format: number
  style?: string
}

export interface LexicalElementNode extends LexicalNode {
  type: 'paragraph' | 'heading' | 'list' | 'listitem' | 'quote' | 'link'
  children?: LexicalNode[]
  tag?: string
  format?: string | number
  indent?: number
}

export interface LexicalRichTextContent {
  root: {
    type: 'root'
    format: string | number
    indent: number
    version: number
    children: LexicalNode[]
  }
}

// Union type pour Rich Text - peut être string ou structure Lexical
export type RichTextContent = string | LexicalRichTextContent | null | undefined

// Types pour les medias PayloadCMS
export interface MediaItem {
  id: string
  url: string
  alt?: string
  width?: number
  height?: number
  mimeType?: string
  filename?: string
  filesize?: number
  focalX?: number
  focalY?: number
}

// Types pour les boutons Call-to-Action
export interface CallToAction {
  label: string
  url: string
  appearance?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'md' | 'lg'
  newTab?: boolean
  icon?: string
}

// Types pour les icônes Lucide React
export type IconName =
  | 'star' | 'zap' | 'shield' | 'heart' | 'settings' | 'chart' | 'target'
  | 'lightbulb' | 'trophy' | 'users' | 'smartphone' | 'globe' | 'lock'
  | 'rocket' | 'clock' | 'check-circle' | 'help-circle' | 'message-circle'
  | 'timer' | 'clipboard' | 'search' | 'chevron-down' | 'arrow-right'

// Interface pour les éléments avec icônes
export interface IconItem {
  icon?: IconName
  iconColor?: string
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
}

// Interface pour les blocs avec contenu
export interface ContentBlockProps extends BlockProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: RichTextContent
  textAlign?: TextAlign
  textColor?: 'light' | 'dark' | 'primary' | 'secondary'
}

// Interface pour les blocs avec actions
export interface ActionBlockProps extends ContentBlockProps {
  callToActions?: CallToAction[]
  maxButtons?: number
}

// Interface pour les blocs avec média
export interface MediaBlockProps extends BlockProps {
  image?: string | MediaItem
  imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'background'
  imageSize?: 'small' | 'medium' | 'large' | 'full'
  video?: string
  videoPoster?: string | MediaItem
}

// Types utilitaires
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// Accessibility utility classes
export const focusClasses = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
export const buttonBaseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50'
export const srOnlyClasses = 'sr-only'

// Color contrast utilities
export const contrastSafeColors = {
  light: {
    text: 'text-gray-900',
    textMuted: 'text-gray-600',
    background: 'bg-white',
  },
  dark: {
    text: 'text-white',
    textMuted: 'text-gray-300',
    background: 'bg-gray-900',
  }
}