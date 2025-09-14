'use client'

import React from 'react'

export const ThemePreview: React.FC = () => {
  return (
    <div className="p-4 border-l border-gray-200">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Live Preview</h3>

      <div className="space-y-4">
        {/* Preview Card */}
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-semibold text-lg mb-2">Sample Content</h4>
          <p className="text-gray-600 mb-3">
            This is how your theme will look with different content types.
          </p>

          {/* Button Examples */}
          <div className="flex space-x-2 mb-3">
            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
              Primary Button
            </button>
            <button className="px-3 py-1.5 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300 transition-colors">
              Secondary Button
            </button>
          </div>

          {/* Form Elements */}
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Sample input field"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sample select option</option>
            </select>
          </div>
        </div>

        {/* Status Colors */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 bg-green-50 border border-green-200 rounded text-center">
            <div className="text-xs text-green-700">Success</div>
          </div>
          <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-center">
            <div className="text-xs text-yellow-700">Warning</div>
          </div>
          <div className="p-2 bg-red-50 border border-red-200 rounded text-center">
            <div className="text-xs text-red-700">Error</div>
          </div>
        </div>

        {/* Typography Preview */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Heading 1</h1>
          <h2 className="text-xl font-semibold">Heading 2</h2>
          <h3 className="text-lg font-medium">Heading 3</h3>
          <p className="text-base">Regular paragraph text</p>
          <p className="text-sm text-gray-600">Secondary text</p>
          <code className="text-sm bg-gray-100 px-1 py-0.5 rounded font-mono">Code example</code>
        </div>
      </div>
    </div>
  )
}