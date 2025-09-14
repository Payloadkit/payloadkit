'use client'

import React, { useCallback, useState } from 'react'
import { useField } from '@payloadcms/ui'

interface ColorPickerProps {
  path: string
  label?: string
  required?: boolean
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  path,
  label,
  required = false
}) => {
  const { value, setValue } = useField<string>({ path })

  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleColorChange = useCallback((newColor: string) => {
    setValue(newColor)
  }, [setValue])

  const presetColors = [
    '#ffffff', '#000000', '#ef4444', '#f59e0b', '#22c55e', '#3b82f6',
    '#8b5cf6', '#ec4899', '#f3f4f6', '#6b7280', '#dc2626', '#d97706',
    '#059669', '#2563eb', '#7c3aed', '#db2777'
  ]

  return (
    <div className="space-y-3">
      {label && (
        <label className="text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Current Color Display */}
      <div className="flex items-center space-x-3">
        <div
          className="w-8 h-8 rounded border-2 border-gray-300 shadow-sm"
          style={{ backgroundColor: value || '#000000' }}
        />
        <input
          type="color"
          value={value || '#000000'}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={value || ''}
          onChange={(e) => handleColorChange(e.target.value)}
          placeholder="#000000"
          className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Color Presets */}
      <div>
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-xs text-gray-500 hover:text-gray-700 mb-2"
        >
          {showAdvanced ? 'Hide' : 'Show'} color presets
        </button>

        {showAdvanced && (
          <div className="grid grid-cols-8 gap-2">
            {presetColors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => handleColorChange(color)}
                className="w-6 h-6 rounded border border-gray-200 hover:border-gray-400 transition-colors"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>

      {/* RGB Input */}
      {showAdvanced && (
        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-700">RGB Values</div>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              min="0"
              max="255"
              placeholder="R"
              className="px-2 py-1 text-xs border border-gray-300 rounded"
              onChange={(e) => {
                const r = parseInt(e.target.value) || 0
                const currentColor = value || '#000000'
                const g = parseInt(currentColor.substr(3, 2), 16) || 0
                const b = parseInt(currentColor.substr(5, 2), 16) || 0
                const newHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
                handleColorChange(newHex)
              }}
            />
            <input
              type="number"
              min="0"
              max="255"
              placeholder="G"
              className="px-2 py-1 text-xs border border-gray-300 rounded"
              onChange={(e) => {
                const g = parseInt(e.target.value) || 0
                const currentColor = value || '#000000'
                const r = parseInt(currentColor.substr(1, 2), 16) || 0
                const b = parseInt(currentColor.substr(5, 2), 16) || 0
                const newHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
                handleColorChange(newHex)
              }}
            />
            <input
              type="number"
              min="0"
              max="255"
              placeholder="B"
              className="px-2 py-1 text-xs border border-gray-300 rounded"
              onChange={(e) => {
                const b = parseInt(e.target.value) || 0
                const currentColor = value || '#000000'
                const r = parseInt(currentColor.substr(1, 2), 16) || 0
                const g = parseInt(currentColor.substr(3, 2), 16) || 0
                const newHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
                handleColorChange(newHex)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}