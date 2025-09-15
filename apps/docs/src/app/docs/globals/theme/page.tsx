import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Palette, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Theme Global',
  description: 'Complete theme system with color presets, shadcn/ui integration, and live preview.',
}

const features = [
  '4 built-in theme presets (Default, Zinc, Slate, New York)',
  'Complete shadcn/ui color palette support',
  'Live theme preview in PayloadCMS admin',
  'Preset manager with export/import functionality',
  'Automatic CSS variables generation',
  'Light/dark mode support',
  'Typography configuration (Sans, Serif, Mono fonts)',
  'Design tokens (border radius, letter spacing)',
  'Custom CSS variables support',
  'Theme initialization utilities',
  'React context provider for frontend'
]

const presets = [
  {
    name: 'Default',
    description: 'Neutral palette with slate colors for professional applications',
    colors: ['#0f172a', '#f1f5f9', '#64748b']
  },
  {
    name: 'Zinc',
    description: 'Modern grayscale with zinc tones for contemporary designs',
    colors: ['#18181b', '#f4f4f5', '#71717a']
  },
  {
    name: 'Slate',
    description: 'Elegant slate colors for sophisticated interfaces',
    colors: ['#020617', '#f1f5f9', '#64748b']
  },
  {
    name: 'New York',
    description: 'System UI fonts with neutral colors for clean layouts',
    colors: ['#09090b', '#f4f4f5', '#71717a']
  }
]

export default function ThemeGlobalPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/globals">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Globals
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Palette className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Theme Global</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Design</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">Stable</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Complete theme system with color presets, shadcn/ui integration, and live preview.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the theme global to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add theme</code>
                </pre>
                <CopyButton
                  text="payloadkit add theme"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { Theme } from './globals/theme'

export default buildConfig({
  // ... other config
  globals: [Theme],
})`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Wrap your app with ThemeProvider</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { ThemeProvider } from './globals/theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            Everything included with the Theme global system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Built-in Presets */}
      <Card>
        <CardHeader>
          <CardTitle>Built-in Theme Presets</CardTitle>
          <CardDescription>
            4 carefully crafted theme presets ready to use in your application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {presets.map((preset) => (
              <div key={preset.name} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{preset.name}</h4>
                  <div className="flex gap-1">
                    {preset.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{preset.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>
        <Tabs defaultValue="initialization" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="initialization">Initialization</TabsTrigger>
            <TabsTrigger value="frontend">Frontend Usage</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
          </TabsList>

          <TabsContent value="initialization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Initialization</CardTitle>
                <CardDescription>
                  Initialize the theme system with default presets after PayloadCMS starts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { buildConfig } from 'payload'
import { Theme, createThemeInitializer } from './globals/theme'

export default buildConfig({
  globals: [Theme],
  onInit: async (payload) => {
    // Initialize theme with default presets
    const initTheme = createThemeInitializer({
      overwrite: false // Don't overwrite existing theme
    })

    await initTheme(payload)
  },
  // ... other config
})`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Integration</CardTitle>
                <CardDescription>
                  Use the theme system in your React application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { ThemeProvider, useTheme } from './globals/theme'

// Wrap your app
export default function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

// Use theme in components
function MyComponent() {
  const { theme, setTheme, mode, isDarkMode } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(newTheme)}>
        Change Theme
      </button>
      <p>Current mode: {mode}</p>
      <p>Dark mode: {isDarkMode ? 'Yes' : 'No'}</p>
    </div>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Theme Creation</CardTitle>
                <CardDescription>
                  Create and apply custom themes programmatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import {
  generateThemeCSS,
  applyThemeToDocument
} from './globals/theme'

// Create custom theme
const customTheme = {
  primaryColor: '#3b82f6',
  backgroundColor: '#ffffff',
  foregroundColor: '#1f2937',
  fontSans: 'Inter, sans-serif',
  borderRadius: '0.375rem'
}

// Generate CSS variables
const css = generateThemeCSS(customTheme)
console.log(css)

// Apply to document
applyThemeToDocument(customTheme)`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Color System */}
      <Card>
        <CardHeader>
          <CardTitle>shadcn/ui Color System</CardTitle>
          <CardDescription>
            Complete integration with shadcn/ui color palette and CSS variables.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Base Colors</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>background</code> - Main background</li>
                <li><code>foreground</code> - Main text color</li>
                <li><code>card</code> - Card background</li>
                <li><code>muted</code> - Muted backgrounds</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Interactive Colors</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>primary</code> - Primary actions</li>
                <li><code>secondary</code> - Secondary actions</li>
                <li><code>accent</code> - Hover/focus states</li>
                <li><code>destructive</code> - Error/danger</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admin Interface */}
      <Card>
        <CardHeader>
          <CardTitle>PayloadCMS Admin Interface</CardTitle>
          <CardDescription>
            Manage your theme settings directly from the PayloadCMS admin panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Preset Manager</h4>
              <p className="text-sm text-muted-foreground">
                Switch between built-in presets, create custom themes, and export/import theme configurations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Color Picker Fields</h4>
              <p className="text-sm text-muted-foreground">
                Interactive color pickers with preset swatches and RGB inputs for precise color selection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Live Preview</h4>
              <p className="text-sm text-muted-foreground">
                See your theme changes in real-time with component previews and sample content.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dependencies */}
      <Card>
        <CardHeader>
          <CardTitle>Dependencies</CardTitle>
          <CardDescription>
            Required packages and registry dependencies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">NPM Dependencies</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>react</code> - React framework</li>
                <li><code>payload</code> - PayloadCMS</li>
                <li><code>@payloadcms/ui</code> - PayloadCMS UI components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Registry Dependencies</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>color-picker</code> - Color picker field component</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}