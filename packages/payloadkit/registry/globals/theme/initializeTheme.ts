import type { Payload } from 'payload'
import { defaultPresets } from './defaultPresets'

interface InitializeThemeOptions {
  payload: Payload
  overwrite?: boolean
}

/**
 * Initialize theme with default presets and settings
 */
export async function initializeTheme({
  payload,
  overwrite = false
}: InitializeThemeOptions): Promise<void> {
  try {
    // Check if theme already exists
    const existingTheme = await payload.findGlobal({
      slug: 'theme'
    })

    if (existingTheme && !overwrite) {
      console.log('Theme already exists. Use overwrite: true to replace.')
      return
    }

    // Get the default preset
    const defaultPreset = defaultPresets[0] // "Default" preset

    // Create initial theme configuration
    const initialTheme = {
      currentPreset: defaultPreset.name,
      mode: 'auto' as const,
      presets: defaultPresets.map(preset => ({
        name: preset.name,
        backgroundColor: preset.backgroundColor,
        foregroundColor: preset.foregroundColor,
        cardBackground: preset.cardBackground,
        cardForeground: preset.cardForeground,
        popoverBackground: preset.popoverBackground,
        popoverForeground: preset.popoverForeground,
        primaryColor: preset.primaryColor,
        primaryForeground: preset.primaryForeground,
        secondaryColor: preset.secondaryColor,
        secondaryForeground: preset.secondaryForeground,
        accentColor: preset.accentColor,
        accentForeground: preset.accentForeground,
        mutedColor: preset.mutedColor,
        mutedForeground: preset.mutedForeground,
        destructiveColor: preset.destructiveColor,
        destructiveForeground: preset.destructiveForeground,
        successColor: preset.successColor,
        successForeground: preset.successForeground,
        warningColor: preset.warningColor,
        warningForeground: preset.warningForeground,
        inputBorder: preset.inputBorder,
        borderColor: preset.borderColor,
        ringColor: preset.ringColor,
        fontSans: preset.fontSans,
        fontSerif: preset.fontSerif,
        fontMono: preset.fontMono,
        headingFont: preset.headingFont,
        borderRadius: preset.borderRadius,
        letterSpacing: preset.letterSpacing,
      })),
      // Apply default preset as current theme
      ...defaultPreset
    }

    // Update or create the theme global
    if (existingTheme) {
      await payload.updateGlobal({
        slug: 'theme',
        data: initialTheme
      })
      console.log('Theme updated with default presets')
    } else {
      await payload.updateGlobal({
        slug: 'theme',
        data: initialTheme
      })
      console.log('Theme initialized with default presets')
    }

  } catch (error) {
    console.error('Failed to initialize theme:', error)
    throw error
  }
}

/**
 * Hook function to initialize theme after PayloadCMS starts
 */
export function createThemeInitializer(options: Omit<InitializeThemeOptions, 'payload'>) {
  return async (payload: Payload) => {
    await initializeTheme({
      ...options,
      payload
    })
  }
}

/**
 * Get current theme from database
 */
export async function getCurrentTheme(payload: Payload) {
  try {
    const theme = await payload.findGlobal({
      slug: 'theme'
    })
    return theme
  } catch (error) {
    console.error('Failed to get current theme:', error)
    return null
  }
}

/**
 * Update theme preset
 */
export async function updateThemePreset(
  payload: Payload,
  presetName: string,
  updates: Record<string, any>
): Promise<void> {
  try {
    const theme = await payload.findGlobal({
      slug: 'theme'
    })

    if (!theme || !theme.presets) {
      throw new Error('Theme or presets not found')
    }

    // Update the specific preset
    const updatedPresets = theme.presets.map((preset: any) => {
      if (preset.name === presetName) {
        return { ...preset, ...updates }
      }
      return preset
    })

    // If the current preset is being updated, also update current theme values
    const currentUpdates: Record<string, any> = {}
    if (theme.currentPreset === presetName) {
      Object.assign(currentUpdates, updates)
    }

    await payload.updateGlobal({
      slug: 'theme',
      data: {
        presets: updatedPresets,
        ...currentUpdates
      }
    })

    console.log(`Theme preset "${presetName}" updated`)
  } catch (error) {
    console.error(`Failed to update theme preset "${presetName}":`, error)
    throw error
  }
}

/**
 * Switch to a different theme preset
 */
export async function switchThemePreset(
  payload: Payload,
  presetName: string
): Promise<void> {
  try {
    const theme = await payload.findGlobal({
      slug: 'theme'
    })

    if (!theme || !theme.presets) {
      throw new Error('Theme or presets not found')
    }

    // Find the target preset
    const targetPreset = theme.presets.find((preset: any) => preset.name === presetName)

    if (!targetPreset) {
      throw new Error(`Preset "${presetName}" not found`)
    }

    // Apply the preset values to current theme
    const presetData = { ...targetPreset }
    delete presetData.name // Remove the name field

    await payload.updateGlobal({
      slug: 'theme',
      data: {
        currentPreset: presetName,
        ...presetData
      }
    })

    console.log(`Switched to theme preset "${presetName}"`)
  } catch (error) {
    console.error(`Failed to switch to theme preset "${presetName}":`, error)
    throw error
  }
}