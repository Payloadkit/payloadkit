// Default theme presets
export interface ThemePreset {
  name: string
  backgroundColor: string
  foregroundColor: string
  cardBackground: string
  cardForeground: string
  popoverBackground: string
  popoverForeground: string
  primaryColor: string
  primaryForeground: string
  secondaryColor: string
  secondaryForeground: string
  accentColor: string
  accentForeground: string
  mutedColor: string
  mutedForeground: string
  destructiveColor: string
  destructiveForeground: string
  successColor: string
  successForeground: string
  warningColor: string
  warningForeground: string
  inputBorder: string
  borderColor: string
  ringColor: string
  fontSans: string
  fontSerif: string
  fontMono: string
  headingFont: string
  borderRadius: string
  letterSpacing: string
}

export const defaultPresets: ThemePreset[] = [
  {
    name: 'Default',
    backgroundColor: '#ffffff',
    foregroundColor: '#0f172a',
    cardBackground: '#ffffff',
    cardForeground: '#0f172a',
    popoverBackground: '#ffffff',
    popoverForeground: '#0f172a',
    primaryColor: '#0f172a',
    primaryForeground: '#f8fafc',
    secondaryColor: '#f1f5f9',
    secondaryForeground: '#0f172a',
    accentColor: '#f1f5f9',
    accentForeground: '#0f172a',
    mutedColor: '#f1f5f9',
    mutedForeground: '#64748b',
    destructiveColor: '#ef4444',
    destructiveForeground: '#f8fafc',
    successColor: '#22c55e',
    successForeground: '#f8fafc',
    warningColor: '#f59e0b',
    warningForeground: '#f8fafc',
    inputBorder: '#e2e8f0',
    borderColor: '#e2e8f0',
    ringColor: '#0f172a',
    fontSans: 'Inter, sans-serif',
    fontSerif: 'Georgia, serif',
    fontMono: 'Fira Code, monospace',
    headingFont: 'sans',
    borderRadius: '0.25rem',
    letterSpacing: '0.025em',
  },
  {
    name: 'Zinc',
    backgroundColor: '#ffffff',
    foregroundColor: '#18181b',
    cardBackground: '#ffffff',
    cardForeground: '#18181b',
    popoverBackground: '#ffffff',
    popoverForeground: '#18181b',
    primaryColor: '#18181b',
    primaryForeground: '#fafafa',
    secondaryColor: '#f4f4f5',
    secondaryForeground: '#18181b',
    accentColor: '#f4f4f5',
    accentForeground: '#18181b',
    mutedColor: '#f4f4f5',
    mutedForeground: '#71717a',
    destructiveColor: '#ef4444',
    destructiveForeground: '#fafafa',
    successColor: '#22c55e',
    successForeground: '#fafafa',
    warningColor: '#f59e0b',
    warningForeground: '#fafafa',
    inputBorder: '#e4e4e7',
    borderColor: '#e4e4e7',
    ringColor: '#18181b',
    fontSans: 'Inter, sans-serif',
    fontSerif: 'Georgia, serif',
    fontMono: 'Fira Code, monospace',
    headingFont: 'sans',
    borderRadius: '0.25rem',
    letterSpacing: '0.025em',
  },
  {
    name: 'Slate',
    backgroundColor: '#ffffff',
    foregroundColor: '#020617',
    cardBackground: '#ffffff',
    cardForeground: '#020617',
    popoverBackground: '#ffffff',
    popoverForeground: '#020617',
    primaryColor: '#020617',
    primaryForeground: '#f8fafc',
    secondaryColor: '#f1f5f9',
    secondaryForeground: '#020617',
    accentColor: '#f1f5f9',
    accentForeground: '#020617',
    mutedColor: '#f1f5f9',
    mutedForeground: '#64748b',
    destructiveColor: '#ef4444',
    destructiveForeground: '#f8fafc',
    successColor: '#22c55e',
    successForeground: '#f8fafc',
    warningColor: '#f59e0b',
    warningForeground: '#f8fafc',
    inputBorder: '#e2e8f0',
    borderColor: '#e2e8f0',
    ringColor: '#020617',
    fontSans: 'Inter, sans-serif',
    fontSerif: 'Georgia, serif',
    fontMono: 'Fira Code, monospace',
    headingFont: 'sans',
    borderRadius: '0.25rem',
    letterSpacing: '0.025em',
  },
  {
    name: 'New York',
    backgroundColor: '#ffffff',
    foregroundColor: '#09090b',
    cardBackground: '#ffffff',
    cardForeground: '#09090b',
    popoverBackground: '#ffffff',
    popoverForeground: '#09090b',
    primaryColor: '#09090b',
    primaryForeground: '#fafafa',
    secondaryColor: '#f4f4f5',
    secondaryForeground: '#09090b',
    accentColor: '#f4f4f5',
    accentForeground: '#09090b',
    mutedColor: '#f4f4f5',
    mutedForeground: '#71717a',
    destructiveColor: '#dc2626',
    destructiveForeground: '#fafafa',
    successColor: '#16a34a',
    successForeground: '#fafafa',
    warningColor: '#ca8a04',
    warningForeground: '#fafafa',
    inputBorder: '#e4e4e7',
    borderColor: '#e4e4e7',
    ringColor: '#09090b',
    fontSans: 'system-ui, sans-serif',
    fontSerif: 'ui-serif, serif',
    fontMono: 'ui-monospace, monospace',
    headingFont: 'sans',
    borderRadius: '0.5rem',
    letterSpacing: '0',
  }
]