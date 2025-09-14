import { useMemo } from 'react'

export interface ColorFieldValue {
  type: 'theme' | 'custom'
  theme?: string
  custom?: string
}

export interface UseThemeColorResult {
  className: string
  style: React.CSSProperties
}

export interface UseThemeColorOptions {
  color?: ColorFieldValue | string
  context?: 'text' | 'background' | 'border'
  opacity?: string
}

// Theme color mappings for shadcn/ui
const themeColorMap: Record<string, { text: string; background: string; border: string }> = {
  // Base colors
  background: {
    text: 'text-background',
    background: 'bg-background',
    border: 'border-background',
  },
  foreground: {
    text: 'text-foreground',
    background: 'bg-foreground',
    border: 'border-foreground',
  },

  // Interactive colors
  primary: {
    text: 'text-primary',
    background: 'bg-primary',
    border: 'border-primary',
  },
  'primary-foreground': {
    text: 'text-primary-foreground',
    background: 'bg-primary-foreground',
    border: 'border-primary-foreground',
  },
  secondary: {
    text: 'text-secondary',
    background: 'bg-secondary',
    border: 'border-secondary',
  },
  'secondary-foreground': {
    text: 'text-secondary-foreground',
    background: 'bg-secondary-foreground',
    border: 'border-secondary-foreground',
  },
  accent: {
    text: 'text-accent',
    background: 'bg-accent',
    border: 'border-accent',
  },
  'accent-foreground': {
    text: 'text-accent-foreground',
    background: 'bg-accent-foreground',
    border: 'border-accent-foreground',
  },

  // Status colors
  destructive: {
    text: 'text-destructive',
    background: 'bg-destructive',
    border: 'border-destructive',
  },
  'destructive-foreground': {
    text: 'text-destructive-foreground',
    background: 'bg-destructive-foreground',
    border: 'border-destructive-foreground',
  },

  // Neutral colors
  muted: {
    text: 'text-muted',
    background: 'bg-muted',
    border: 'border-muted',
  },
  'muted-foreground': {
    text: 'text-muted-foreground',
    background: 'bg-muted-foreground',
    border: 'border-muted-foreground',
  },
  card: {
    text: 'text-card',
    background: 'bg-card',
    border: 'border-card',
  },
  'card-foreground': {
    text: 'text-card-foreground',
    background: 'bg-card-foreground',
    border: 'border-card-foreground',
  },

  // Form colors
  border: {
    text: 'text-border',
    background: 'bg-border',
    border: 'border-border',
  },
  input: {
    text: 'text-input',
    background: 'bg-input',
    border: 'border-input',
  },
  ring: {
    text: 'text-ring',
    background: 'bg-ring',
    border: 'border-ring',
  },
}

export const useThemeColor = ({
  color,
  context = 'text',
  opacity
}: UseThemeColorOptions): UseThemeColorResult => {
  return useMemo(() => {
    // Default result
    const defaultResult: UseThemeColorResult = {
      className: '',
      style: {},
    }

    if (!color) return defaultResult

    // Handle string colors (direct hex/rgb/etc)
    if (typeof color === 'string') {
      if (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl')) {
        const styleProperty = context === 'text' ? 'color'
                           : context === 'background' ? 'backgroundColor'
                           : 'borderColor'

        return {
          className: '',
          style: { [styleProperty]: color },
        }
      }

      // Handle theme color strings
      const themeMapping = themeColorMap[color]
      if (themeMapping) {
        return {
          className: themeMapping[context],
          style: {},
        }
      }
    }

    // Handle ColorFieldValue objects
    if (typeof color === 'object' && color.type) {
      if (color.type === 'custom' && color.custom) {
        const styleProperty = context === 'text' ? 'color'
                           : context === 'background' ? 'backgroundColor'
                           : 'borderColor'

        return {
          className: '',
          style: { [styleProperty]: color.custom },
        }
      }

      if (color.type === 'theme' && color.theme) {
        const themeMapping = themeColorMap[color.theme]
        if (themeMapping) {
          let className = themeMapping[context]

          // Add opacity if specified
          if (opacity) {
            className += `/${opacity}`
          }

          return {
            className,
            style: {},
          }
        }
      }
    }

    return defaultResult
  }, [color, context, opacity])
}

export default useThemeColor