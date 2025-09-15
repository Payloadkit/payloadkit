import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Calendar, Check, Info, AlertCircle } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'
import { DocsBreadcrumb } from '@/components/docs-breadcrumb'
import { PropsTable, createPropDefinition } from '@/components/props-table'
import { CodeTabs } from '@/components/code-tabs'

export const metadata: Metadata = {
  title: 'Cal.com Block',
  description: 'Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types.',
}

const features = [
  'Full Cal.com integration with iframe embedding',
  'Support for specific event types and general booking pages',
  '3 calendar themes: auto, light, dark',
  '3 layout options: full-width, split-content, split-calendar',
  '4 calendar height options: small, medium, large, auto',
  'Rich header content: eyebrow, title, subtitle, description',
  'Feature list with 8 Lucide React icons',
  'Auto-loading of Cal.com embed script',
  'Responsive design with mobile-first approach'
]

const icons = ['calendar', 'clock', 'message-circle', 'phone', 'target', 'check', 'star', 'shield']

// Props definition for the PropsTable
const calcomProps = [
  createPropDefinition(
    "calcomUsername",
    "string",
    "Your Cal.com username (required)",
    { required: true }
  ),
  createPropDefinition(
    "eventType",
    "string",
    "Specific event type slug (optional)"
  ),
  createPropDefinition(
    "layout",
    "'full-width' | 'split-content' | 'split-calendar'",
    "Block layout style",
    { default: "'full-width'" }
  ),
  createPropDefinition(
    "theme",
    "'auto' | 'light' | 'dark'",
    "Calendar theme",
    { default: "'auto'" }
  ),
  createPropDefinition(
    "height",
    "'sm' | 'md' | 'lg' | 'auto'",
    "Calendar height",
    { default: "'lg'" }
  ),
]

export default function CalComBlockPage() {
  const codeExample = `// components/BookingSection.tsx
import { CalComBlockComponent } from './blocks/calcom-block'

export function BookingSection() {
  return (
    <CalComBlockComponent
      calcomUsername="john-doe"
      eventType="30-minute-consultation"
      layout="split-content"
      title="Book Your Free Consultation"
      subtitle="Schedule a call with our expert team"
      description="Choose a time that works best for you and let us discuss your project."
      theme="auto"
      height="lg"
      features={[
        {
          icon: "calendar",
          text: "Flexible scheduling"
        },
        {
          icon: "clock",
          text: "30-minute sessions"
        },
        {
          icon: "shield",
          text: "Secure & private"
        },
        {
          icon: "check",
          text: "No commitment required"
        }
      ]}
    />
  )
}`

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <DocsBreadcrumb />

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
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Cal.com Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Integration</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">Stable</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the Cal.com block to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add calcom-block</code>
                </pre>
                <CopyButton text="payloadkit add calcom-block" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { CalComBlock } from './blocks/calcom-block'

export default buildConfig({
  // ... other config
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [CalComBlock], // Add here
        },
      ],
    },
  ],
})`}</code>
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
            Everything included with the Cal.com Block component.
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

      {/* Prerequisites */}
      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Prerequisites</AlertTitle>
        <AlertDescription>
          You'll need a Cal.com account and username. Set up your event types in your Cal.com dashboard before using this component.
          <br />
          <a
            href="https://cal.com"
            className="text-primary hover:underline font-medium mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up at cal.com →
          </a>
        </AlertDescription>
      </Alert>

      {/* Usage Examples */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Usage</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Setup</TabsTrigger>
            <TabsTrigger value="frontend">Frontend Component</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Integration</CardTitle>
                <CardDescription>Simple Cal.com integration with minimal configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Minimal setup - just username
<CalComBlockComponent
  calcomUsername="your-username"
/>`}</code>
                  </pre>
                  <CopyButton text={`// Minimal setup - just username
<CalComBlockComponent
  calcomUsername="your-username"
/>`} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Configuration</CardTitle>
                <CardDescription>Full configuration with all available options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                  <CopyButton text={codeExample} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Implementation</CardTitle>
                <CardDescription>How to render the Cal.com block in your React components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// src/blocks/RenderBlocks.tsx
import { CalComBlockComponent } from './calcom-block/Component'

const blockComponents = {
  'calcom-block': CalComBlockComponent,
  // ... other blocks
}

export function RenderBlocks({ blocks }) {
  return blocks?.map((block, index) => {
    const BlockComponent = blockComponents[block.blockType]
    if (!BlockComponent) return null

    return <BlockComponent key={index} {...block} />
  })
}`}</code>
                  </pre>
                  <CopyButton text={`// src/blocks/RenderBlocks.tsx
import { CalComBlockComponent } from './calcom-block/Component'

const blockComponents = {
  'calcom-block': CalComBlockComponent,
  // ... other blocks
}

export function RenderBlocks({ blocks }) {
  return blocks?.map((block, index) => {
    const BlockComponent = blockComponents[block.blockType]
    if (!BlockComponent) return null

    return <BlockComponent key={index} {...block} />
  })
}`} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Props */}
      <Card>
        <CardHeader>
          <CardTitle>Component Props</CardTitle>
          <CardDescription>Available props for the Cal.com Block component</CardDescription>
        </CardHeader>
        <CardContent>
          <PropsTable props={calcomProps} />
        </CardContent>
      </Card>

      {/* Available Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Available Icons</CardTitle>
          <CardDescription>Icons available for the features list</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {icons.map((icon) => (
              <div key={icon} className="flex flex-col items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="h-5 w-5 bg-primary/10 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary/30 rounded-full" />
                </div>
                <code className="text-xs font-mono text-center">{icon}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Setup Guide</CardTitle>
          <CardDescription>Step-by-step guide to set up Cal.com integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  1
                </div>
                <h3 className="text-lg font-medium">Create Cal.com Account</h3>
              </div>
              <p className="text-muted-foreground ml-11">
                Sign up at{' '}
                <a href="https://cal.com" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  cal.com
                </a>{' '}
                and choose your username.
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  2
                </div>
                <h3 className="text-lg font-medium">Set Up Event Types</h3>
              </div>
              <p className="text-muted-foreground ml-11">
                Create your event types in the Cal.com dashboard (e.g., "30-minute-consultation", "discovery-call").
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  3
                </div>
                <h3 className="text-lg font-medium">Use in PayloadKit</h3>
              </div>
              <div className="ml-11">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// For general booking page
calcomUsername="your-username"

// For specific event type
calcomUsername="your-username"
eventType="30-minute-consultation"`}</code>
                  </pre>
                  <CopyButton text={`// For general booking page
calcomUsername="your-username"

// For specific event type
calcomUsername="your-username"
eventType="30-minute-consultation"`} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}