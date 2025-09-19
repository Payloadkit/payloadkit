// Block shared components - Centralized reusable components for blocks

// Background management
export {
  BlockBackground,
  type BlockBackgroundProps,
  type BackgroundFieldValue,
  default as Background
} from './BlockBackground'

// Layout and spacing
export {
  BlockSection,
  type BlockSectionProps,
  type SpacingSize,
  type SectionHeight,
  default as Section
} from './BlockSection'

// Layout and grid management
export {
  BlockLayout,
  useLayoutInfo,
  type GridLayout,
  type GapSize,
  default as Layout
} from './BlockLayout'

// Typography components
export {
  BlockHeading,
  type BlockHeadingProps,
  type HeadingLevel,
  default as Heading
} from './BlockHeading'

export {
  BlockText,
  type BlockTextProps,
  type TextSize,
  type TextAlign,
  type TextWeight,
  default as Text
} from './BlockText'

// Theme utilities
export {
  useThemeColor,
  type ColorFieldValue,
  type UseThemeColorResult,
  type UseThemeColorOptions,
  default as ThemeColor
} from './useThemeColor'

// Optimized components
export {
  OptimizedImage,
  type OptimizedImageProps,
  default as Image
} from './OptimizedImage'

// Accessibility hooks
export {
  useKeyboardNavigation,
  useFocusManagement,
  type KeyboardNavigationOptions,
  default as KeyboardNavigation
} from './useKeyboardNavigation'

// Types
export * from './types'