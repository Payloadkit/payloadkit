import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Theme Global - PayloadKit',
  description: 'Complete theme system with color presets, shadcn/ui integration, and live preview for PayloadCMS applications.',
}

// Theme preset demonstrations
function ThemeDefault() {
  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <div className="bg-slate-900 text-slate-50 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Default Theme</h3>
        <p className="text-sm text-slate-300 mb-4">Professional slate colors for business applications</p>
        <div className="flex gap-2">
          <div className="bg-slate-700 px-3 py-2 rounded text-sm">Primary</div>
          <div className="bg-slate-600 px-3 py-2 rounded text-sm">Secondary</div>
        </div>
      </div>
      <div className="flex gap-1 justify-center">
        <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white shadow-sm"></div>
      </div>
    </div>
  )
}

function ThemeZinc() {
  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <div className="bg-zinc-900 text-zinc-50 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Zinc Theme</h3>
        <p className="text-sm text-zinc-300 mb-4">Modern grayscale for contemporary designs</p>
        <div className="flex gap-2">
          <div className="bg-zinc-700 px-3 py-2 rounded text-sm">Primary</div>
          <div className="bg-zinc-600 px-3 py-2 rounded text-sm">Secondary</div>
        </div>
      </div>
      <div className="flex gap-1 justify-center">
        <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white shadow-sm"></div>
      </div>
    </div>
  )
}

function ThemeNewYork() {
  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <div className="bg-neutral-900 text-neutral-50 p-4 rounded-lg font-mono">
        <h3 className="font-semibold text-lg mb-2">New York</h3>
        <p className="text-sm text-neutral-300 mb-4">System fonts with clean layouts</p>
        <div className="flex gap-2">
          <div className="bg-neutral-700 px-3 py-2 rounded text-sm">Primary</div>
          <div className="bg-neutral-600 px-3 py-2 rounded text-sm">Secondary</div>
        </div>
      </div>
      <div className="flex gap-1 justify-center">
        <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-white shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white shadow-sm"></div>
      </div>
    </div>
  )
}

const componentCode = `// Component.tsx - Theme Provider for frontend
import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: ThemeConfig
  setTheme: (theme: ThemeConfig) => void
  mode: 'light' | 'dark'
  toggleMode: () => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme)
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Apply theme CSS variables to document
    applyThemeToDocument(theme, mode)
  }, [theme, mode])

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      mode,
      toggleMode,
      isDarkMode: mode === 'dark'
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}`

const configCode = `// config.ts - PayloadCMS Global Configuration
import type { GlobalConfig } from 'payload'
import { ColorPickerField } from '@payloadcms/plugin-form-builder'

export const Theme: GlobalConfig = {
  slug: 'theme',
  label: 'Theme Settings',
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'preset',
      type: 'select',
      label: 'Theme Preset',
      required: true,
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Zinc', value: 'zinc' },
        { label: 'Slate', value: 'slate' },
        { label: 'New York', value: 'new-york' }
      ]
    },
    {
      name: 'customColors',
      type: 'group',
      label: 'Custom Colors',
      fields: [
        {
          name: 'primary',
          type: 'text',
          label: 'Primary Color',
          admin: {
            components: {
              Field: ColorPickerField,
            },
          },
        },
        {
          name: 'secondary',
          type: 'text',
          label: 'Secondary Color',
          admin: {
            components: {
              Field: ColorPickerField,
            },
          },
        }
      ]
    },
    {
      name: 'typography',
      type: 'group',
      label: 'Typography',
      fields: [
        {
          name: 'fontFamily',
          type: 'select',
          label: 'Font Family',
          options: [
            { label: 'Inter (Sans)', value: 'sans' },
            { label: 'Times (Serif)', value: 'serif' },
            { label: 'JetBrains Mono', value: 'mono' }
          ]
        }
      ]
    }
  ]
}`

const usageCode = `// Usage in Next.js layout
import { ThemeProvider } from '@/globals/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// Using theme in components
import { useTheme } from '@/globals/theme'

function ThemeButton() {
  const { theme, toggleMode, isDarkMode } = useTheme()

  return (
    <button
      onClick={toggleMode}
      className="px-4 py-2 rounded bg-primary text-primary-foreground"
    >
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}`

export default function ThemeGlobalPage() {
  const steps = [
    {
      title: 'Install Theme Global',
      keyword: 'Install',
      description: 'Add the theme global to your PayloadCMS project',
      content: (
        <Snippet command="bunx payloadkit add Theme">
          Install the theme global using the PayloadKit CLI. This adds all necessary files and dependencies.
        </Snippet>
      )
    },
    {
      title: 'Configure PayloadCMS',
      keyword: 'Configure',
      description: 'Add the theme global to your Payload configuration',
      content: (
        <CodeBlock
          code={`import { Theme } from './globals/theme'

export default buildConfig({
  globals: [Theme],
  // ... rest of config
})`}
          language="typescript"
        />
      )
    },
    {
      title: 'Wrap Application',
      keyword: 'Integrate',
      description: 'Add ThemeProvider to your Next.js layout',
      content: (
        <CodeBlock
          code={`import { ThemeProvider } from './globals/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      )
    },
    {
      title: 'Configure Theme',
      keyword: 'Setup',
      description: 'Set up your theme in PayloadCMS admin',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Navigate to <code>yourdomain.com/admin/globals/theme</code> to configure:
          </p>
          <ul className="text-sm space-y-2">
            <li>• Select from 4 built-in presets</li>
            <li>• Customize primary and secondary colors</li>
            <li>• Choose typography settings</li>
            <li>• Preview changes in real-time</li>
          </ul>
        </div>
      )
    }
  ]

  const apiProps = [
    {
      name: 'theme',
      type: 'ThemeConfig',
      description: 'Current theme configuration object',
      required: false
    },
    {
      name: 'setTheme',
      type: '(theme: ThemeConfig) => void',
      description: 'Function to update the theme configuration',
      required: false
    },
    {
      name: 'mode',
      type: "'light' | 'dark'",
      description: 'Current theme mode',
      required: false
    },
    {
      name: 'toggleMode',
      type: '() => void',
      description: 'Function to toggle between light and dark mode',
      required: false
    },
    {
      name: 'isDarkMode',
      type: 'boolean',
      description: 'Boolean indicating if dark mode is active',
      required: false
    }
  ]

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/globals">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Globals
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Theme Global"
        description="Complete theme system with color presets, shadcn/ui integration, and live preview for PayloadCMS applications."
        category="globals"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Theme Presets"
        description="Interactive demonstration of the 4 built-in theme presets with live color palettes"
        variants={[
          {
            name: 'Default',
            description: 'Professional slate colors for business applications',
            component: <ThemeDefault />
          },
          {
            name: 'Zinc',
            description: 'Modern grayscale for contemporary designs',
            component: <ThemeZinc />
          },
          {
            name: 'New York',
            description: 'System fonts with clean layouts',
            component: <ThemeNewYork />
          }
        ]}
        code={{
          component: componentCode,
          config: configCode,
          usage: usageCode
        }}
        responsive
        interactive
      />

      {/* Tutorial Steps */}
      <TutorialSteps
        title="Installation & Setup"
        steps={steps}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="Theme Hook API"
        description="Complete reference for the useTheme() hook provided by ThemeProvider"
        props={apiProps}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          code={`interface ThemeConfig {
  preset: 'default' | 'zinc' | 'slate' | 'new-york'
  customColors?: {
    primary?: string
    secondary?: string
    accent?: string
    destructive?: string
  }
  typography?: {
    fontFamily: 'sans' | 'serif' | 'mono'
    fontSize?: {
      base?: string
      lg?: string
      xl?: string
    }
  }
  borderRadius?: string
  shadows?: boolean
}

interface ThemeContextType {
  theme: ThemeConfig
  setTheme: (theme: ThemeConfig) => void
  mode: 'light' | 'dark'
  toggleMode: () => void
  isDarkMode: boolean
}`}
          language="typescript"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="globals"
        dependencies={['@payloadcms/ui', 'react', 'color-picker-field']}
        tags={['theme', 'design-system', 'shadcn-ui', 'colors', 'typography', 'dark-mode', 'presets']}
      />
    </div>
  )
}