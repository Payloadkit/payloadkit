import { type ThemePreset } from '../defaultPresets'

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

/**
 * Convert RGB values to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Generate CSS variables from theme preset
 */
export function generateCSSVariables(theme: Partial<ThemePreset>): string {
  const cssVariables: string[] = []

  // Color variables
  if (theme.backgroundColor) {
    const rgb = hexToRgb(theme.backgroundColor)
    cssVariables.push(`--background: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.foregroundColor) {
    const rgb = hexToRgb(theme.foregroundColor)
    cssVariables.push(`--foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.cardBackground) {
    const rgb = hexToRgb(theme.cardBackground)
    cssVariables.push(`--card: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.cardForeground) {
    const rgb = hexToRgb(theme.cardForeground)
    cssVariables.push(`--card-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.popoverBackground) {
    const rgb = hexToRgb(theme.popoverBackground)
    cssVariables.push(`--popover: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.popoverForeground) {
    const rgb = hexToRgb(theme.popoverForeground)
    cssVariables.push(`--popover-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.primaryColor) {
    const rgb = hexToRgb(theme.primaryColor)
    cssVariables.push(`--primary: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.primaryForeground) {
    const rgb = hexToRgb(theme.primaryForeground)
    cssVariables.push(`--primary-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.secondaryColor) {
    const rgb = hexToRgb(theme.secondaryColor)
    cssVariables.push(`--secondary: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.secondaryForeground) {
    const rgb = hexToRgb(theme.secondaryForeground)
    cssVariables.push(`--secondary-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.accentColor) {
    const rgb = hexToRgb(theme.accentColor)
    cssVariables.push(`--accent: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.accentForeground) {
    const rgb = hexToRgb(theme.accentForeground)
    cssVariables.push(`--accent-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.mutedColor) {
    const rgb = hexToRgb(theme.mutedColor)
    cssVariables.push(`--muted: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.mutedForeground) {
    const rgb = hexToRgb(theme.mutedForeground)
    cssVariables.push(`--muted-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.destructiveColor) {
    const rgb = hexToRgb(theme.destructiveColor)
    cssVariables.push(`--destructive: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.destructiveForeground) {
    const rgb = hexToRgb(theme.destructiveForeground)
    cssVariables.push(`--destructive-foreground: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.borderColor) {
    const rgb = hexToRgb(theme.borderColor)
    cssVariables.push(`--border: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.inputBorder) {
    const rgb = hexToRgb(theme.inputBorder)
    cssVariables.push(`--input: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  if (theme.ringColor) {
    const rgb = hexToRgb(theme.ringColor)
    cssVariables.push(`--ring: ${rgb?.r} ${rgb?.g} ${rgb?.b};`)
  }

  // Design tokens
  if (theme.borderRadius) {
    cssVariables.push(`--radius: ${theme.borderRadius};`)
  }

  return cssVariables.join('\n  ')
}

/**
 * Generate complete CSS for theme
 */
export function generateThemeCSS(theme: Partial<ThemePreset>): string {
  const lightVariables = generateCSSVariables(theme)

  return `
:root {
  ${lightVariables}
}

.dark {
  ${lightVariables}
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: ${theme.fontSans || 'Inter, sans-serif'};
  letter-spacing: ${theme.letterSpacing || '0.025em'};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${
    theme.headingFont === 'serif'
      ? theme.fontSerif || 'Georgia, serif'
      : theme.headingFont === 'sans'
      ? theme.fontSans || 'Inter, sans-serif'
      : theme.headingFont || theme.fontSans || 'Inter, sans-serif'
  };
}

code, pre {
  font-family: ${theme.fontMono || 'Fira Code, monospace'};
}
`.trim()
}

/**
 * Apply theme to document
 */
export function applyThemeToDocument(theme: Partial<ThemePreset>): void {
  const css = generateThemeCSS(theme)

  // Remove existing theme style
  const existingStyle = document.getElementById('payloadkit-theme')
  if (existingStyle) {
    existingStyle.remove()
  }

  // Add new theme style
  const style = document.createElement('style')
  style.id = 'payloadkit-theme'
  style.textContent = css
  document.head.appendChild(style)
}

/**
 * Get theme from CSS variables
 */
export function getThemeFromCSS(): Partial<ThemePreset> {
  const root = document.documentElement
  const computedStyle = getComputedStyle(root)

  const getCSSVariable = (name: string): string => {
    return computedStyle.getPropertyValue(`--${name}`).trim()
  }

  // Convert RGB values back to hex
  const rgbToHexFromCSS = (rgbString: string): string => {
    const values = rgbString.split(' ').map(v => parseInt(v))
    if (values.length === 3) {
      return rgbToHex(values[0], values[1], values[2])
    }
    return '#000000'
  }

  return {
    backgroundColor: rgbToHexFromCSS(getCSSVariable('background')),
    foregroundColor: rgbToHexFromCSS(getCSSVariable('foreground')),
    primaryColor: rgbToHexFromCSS(getCSSVariable('primary')),
    primaryForeground: rgbToHexFromCSS(getCSSVariable('primary-foreground')),
    secondaryColor: rgbToHexFromCSS(getCSSVariable('secondary')),
    secondaryForeground: rgbToHexFromCSS(getCSSVariable('secondary-foreground')),
    accentColor: rgbToHexFromCSS(getCSSVariable('accent')),
    accentForeground: rgbToHexFromCSS(getCSSVariable('accent-foreground')),
    mutedColor: rgbToHexFromCSS(getCSSVariable('muted')),
    mutedForeground: rgbToHexFromCSS(getCSSVariable('muted-foreground')),
    destructiveColor: rgbToHexFromCSS(getCSSVariable('destructive')),
    destructiveForeground: rgbToHexFromCSS(getCSSVariable('destructive-foreground')),
    borderColor: rgbToHexFromCSS(getCSSVariable('border')),
    inputBorder: rgbToHexFromCSS(getCSSVariable('input')),
    ringColor: rgbToHexFromCSS(getCSSVariable('ring')),
    borderRadius: getCSSVariable('radius'),
  }
}