import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Check, Info } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Outline Block',
  description: 'Automatic table of contents generator with multiple positioning options, styles, and interactive features. Perfect for long-form content, documentation, and articles.',
}

export default function OutlineBlockPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/blocks">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blocks
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Outline Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Content</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">New</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Automatic table of contents generator with multiple positioning options, styles, and interactive features. Perfect for long-form content, documentation, and articles.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>payloadkit add outline-block</code>
          </pre>
          <CopyButton text="payloadkit add outline-block" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>2 content source modes: auto-detect from page content or manual items</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Automatic heading extraction from customizable content selectors</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Support for H1-H6 heading levels with configurable inclusion</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 positioning options: inline, sticky-left, sticky-right, floating</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 visual styles: simple, card, pills, numbered, dots</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Active section highlighting during scroll</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Smooth scrolling animation with customizable offset</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Reading progress indicator with visual progress bar</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Collapsible interface with expand/collapse functionality</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Auto-hide on mobile devices for better UX</span>
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">PayloadCMS Configuration</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// payload.config.ts
import { OutlineBlock } from './blocks/outline-block'

export default buildConfig({
  // ... other config
  blocks: [
    OutlineBlock,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { OutlineBlock } from './blocks/outline-block'

export default buildConfig({
  // ... other config
  blocks: [
    OutlineBlock,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Auto-Detection Mode</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/TableOfContents.tsx
import { OutlineBlockComponent } from './blocks/outline-block'

export function TableOfContents() {
  return (
    <OutlineBlockComponent
      sourceType="auto"
      contentSelector=".prose, .content, article"
      headingLevels={[
        { level: 'h2' },
        { level: 'h3' },
        { level: 'h4' }
      ]}
      position="sticky-right"
      style="card"
      highlightActive={true}
      showProgress={true}
      smoothScroll={true}
    />
  )
}`}</code>
            </pre>
            <CopyButton text={`// components/TableOfContents.tsx
import { OutlineBlockComponent } from './blocks/outline-block'

export function TableOfContents() {
  return (
    <OutlineBlockComponent
      sourceType="auto"
      contentSelector=".prose, .content, article"
      headingLevels={[
        { level: 'h2' },
        { level: 'h3' },
        { level: 'h4' }
      ]}
      position="sticky-right"
      style="card"
      highlightActive={true}
      showProgress={true}
      smoothScroll={true}
    />
  )
}`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Manual Mode</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/CustomOutline.tsx
import { OutlineBlockComponent } from './blocks/outline-block'

const manualItems = [
  { title: 'Introduction', anchor: '#introduction', level: 1 },
  { title: 'Getting Started', anchor: '#getting-started', level: 1 },
  { title: 'Installation', anchor: '#installation', level: 2 },
  { title: 'Configuration', anchor: '#configuration', level: 2 },
  { title: 'Advanced Usage', anchor: '#advanced', level: 1 }
]

export function CustomOutline() {
  return (
    <OutlineBlockComponent
      sourceType="manual"
      manualItems={manualItems}
      position="floating"
      style="numbered"
      collapsible={true}
      initiallyCollapsed={false}
    />
  )
}`}</code>
            </pre>
            <CopyButton text={`// components/CustomOutline.tsx
import { OutlineBlockComponent } from './blocks/outline-block'

const manualItems = [
  { title: 'Introduction', anchor: '#introduction', level: 1 },
  { title: 'Getting Started', anchor: '#getting-started', level: 1 },
  { title: 'Installation', anchor: '#installation', level: 2 },
  { title: 'Configuration', anchor: '#configuration', level: 2 },
  { title: 'Advanced Usage', anchor: '#advanced', level: 1 }
]

export function CustomOutline() {
  return (
    <OutlineBlockComponent
      sourceType="manual"
      manualItems={manualItems}
      position="floating"
      style="numbered"
      collapsible={true}
      initiallyCollapsed={false}
    />
  )
}`} />
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-4 py-2 text-left">Prop</th>
                <th className="border border-border px-4 py-2 text-left">Type</th>
                <th className="border border-border px-4 py-2 text-left">Default</th>
                <th className="border border-border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">sourceType</td>
                <td className="border border-border px-4 py-2 text-sm">'auto' | 'manual'</td>
                <td className="border border-border px-4 py-2 text-sm">'auto'</td>
                <td className="border border-border px-4 py-2 text-sm">Content source mode</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">position</td>
                <td className="border border-border px-4 py-2 text-sm">'inline' | 'sticky-left' | 'sticky-right' | 'floating'</td>
                <td className="border border-border px-4 py-2 text-sm">'inline'</td>
                <td className="border border-border px-4 py-2 text-sm">Outline positioning</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">style</td>
                <td className="border border-border px-4 py-2 text-sm">'simple' | 'card' | 'pills' | 'numbered' | 'dots'</td>
                <td className="border border-border px-4 py-2 text-sm">'card'</td>
                <td className="border border-border px-4 py-2 text-sm">Visual style</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">contentSelector</td>
                <td className="border border-border px-4 py-2 text-sm">string</td>
                <td className="border border-border px-4 py-2 text-sm">'.prose, .content, article, main'</td>
                <td className="border border-border px-4 py-2 text-sm">CSS selector for content area</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">highlightActive</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Highlight active section</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">showProgress</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">false</td>
                <td className="border border-border px-4 py-2 text-sm">Show reading progress</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">smoothScroll</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Enable smooth scrolling</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">collapsible</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">false</td>
                <td className="border border-border px-4 py-2 text-sm">Make collapsible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Position Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Position Examples</h2>

        <div className="grid gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Sticky Right (Documentation)</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`position="sticky-right"
style="card"
maxWidth="md"`}</code>
              </pre>
              <CopyButton text={`position="sticky-right"
style="card"
maxWidth="md"`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Floating (Mobile-Friendly)</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`position="floating"
style="pills"
collapsible={true}
autoHide={true}`}</code>
              </pre>
              <CopyButton text={`position="floating"
style="pills"
collapsible={true}
autoHide={true}`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Inline (Content Flow)</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`position="inline"
style="numbered"
maxWidth="full"`}</code>
              </pre>
              <CopyButton text={`position="inline"
style="numbered"
maxWidth="full"`} />
            </div>
          </div>
        </div>
      </div>

      {/* Style Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Style Variations</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Card Style</h3>
            <p className="text-sm text-muted-foreground">Clean card with border and background</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Pills Style</h3>
            <p className="text-sm text-muted-foreground">Rounded pill-shaped items</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Numbered Style</h3>
            <p className="text-sm text-muted-foreground">Items with numbered indicators</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Dots Style</h3>
            <p className="text-sm text-muted-foreground">Simple dots as indicators</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Simple Style</h3>
            <p className="text-sm text-muted-foreground">Minimal text-only list</p>
          </div>
        </div>
      </div>

      {/* Content Structure Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Content Structure Tips</h2>
        <div className="space-y-3">
          <div className="p-4 border border-blue-200 bg-blue-50 rounded-md dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">For Auto-Detection Mode</h3>
            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li>• Ensure your content has proper heading structure (H1-H6)</li>
              <li>• Wrap content in containers matching your content selectors</li>
              <li>• Use semantic HTML for better accessibility</li>
              <li>• Add unique IDs to headings for precise linking</li>
            </ul>
          </div>

          <div className="p-4 border border-green-200 bg-green-50 rounded-md dark:border-green-800 dark:bg-green-900/20">
            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Performance Tips</h3>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Component is client-side only for DOM access</li>
              <li>• Uses passive scroll listeners for better performance</li>
              <li>• Debounced scroll handlers prevent excessive updates</li>
              <li>• Auto-hide on mobile reduces resource usage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}