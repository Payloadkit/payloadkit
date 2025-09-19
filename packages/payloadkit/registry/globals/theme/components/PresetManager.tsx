'use client'

import React, { useState } from 'react'
import { useFormFields } from '@payloadcms/ui'
import { defaultPresets, type ThemePreset } from '../defaultPresets'

export const PresetManager: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>('Default')

  const { setValue } = useFormFields(([state]) => {
    return {
      setValue: state.setValue
    }
  })

  const applyPreset = (preset: ThemePreset) => {
    // Apply all preset values to the current theme
    Object.entries(preset).forEach(([key, value]) => {
      if (key !== 'name') {
        setValue(key, value)
      }
    })

    // Update current preset name
    setValue('currentPreset', preset.name)
    setSelectedPreset(preset.name)
  }

  const exportTheme = () => {
    // Get current theme values and create exportable JSON
    // This would need to be implemented based on current form values
    console.log('Export theme functionality to be implemented')
  }

  const importTheme = () => {
    // Allow importing a theme from JSON
    console.log('Import theme functionality to be implemented')
  }

  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Theme Presets</h3>

        {/* Preset Selection */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {defaultPresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => applyPreset(preset)}
              className={`p-3 text-left border rounded-lg transition-colors ${
                selectedPreset === preset.name
                  ? 'bg-blue-50 border-blue-300'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                {/* Color preview */}
                <div className="flex space-x-1">
                  <div
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.primaryColor }}
                  />
                  <div
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.secondaryColor }}
                  />
                  <div
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.accentColor }}
                  />
                </div>
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {preset.headingFont === 'serif' ? 'Serif' : 'Sans-serif'} • {preset.borderRadius}
              </div>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-3 border-t border-gray-200">
          <button
            type="button"
            onClick={exportTheme}
            className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Export Theme
          </button>
          <button
            type="button"
            onClick={importTheme}
            className="px-3 py-1.5 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Import Theme
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
          <strong>Tip:</strong> Select a preset above to apply its colors and settings to your theme.
          You can then customize individual values in the sections below.
        </div>
      </div>
    </div>
  )
}