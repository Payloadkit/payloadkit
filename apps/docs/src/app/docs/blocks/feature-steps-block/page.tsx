import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Layers, Check, Info } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Feature Steps Block',
  description: 'Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides.',
}

const features = [
  'Two section layouts: stacked or two-column',
  'Rich header content: eyebrow, title, subtitle, description',
  '16 Lucide React icons for steps',
  '5 step layouts: 2-col, 3-col, 4-col grid, vertical list, staggered stair',
  'Optional step numbering with customizable styling',
  '3 card styles: elevated, flat, minimal',
  'Stair layout with optional images for each step',
  'Optional advantages section with checkmarks',
  'Flexible background options: color, gradient, image, none',
  'Responsive design with mobile-first approach'
]

const icons = ['target', 'message-circle', 'trending-up', 'book-open', 'lightbulb', 'zap', 'search', 'star', 'rocket', 'graduation-cap', 'settings', 'bar-chart', 'shield', 'heart', 'trophy', 'palette']

export default function FeatureStepsBlockPage() {
  const codeExample = `// components/FeatureSteps.tsx
import { FeatureStepsBlockComponent } from './blocks/feature-steps-block'

const exampleSteps = [
  {
    icon: 'target',
    title: 'Define Your Goals',
    description: 'Set clear, measurable objectives for your project.'
  },
  {
    icon: 'lightbulb',
    title: 'Plan Your Strategy',
    description: 'Develop a comprehensive plan to achieve your goals.'
  },
  {
    icon: 'rocket',
    title: 'Execute & Launch',
    description: 'Implement your plan and launch your project.'
  }
]

export function FeatureSteps() {
  return (
    <FeatureStepsBlockComponent
      title="How It Works"
      stepsLayout="grid-3"
      showStepNumbers={true}
      steps={exampleSteps}
      showAdvantages={true}
      advantages={[
        { text: "Easy to follow process" },
        { text: "Proven methodology" },
        { text: "Expert guidance" }
      ]}
    />
  )
}`

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
            <Layers className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Feature Steps Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Process</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">New</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the Feature Steps block to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add feature-steps-block</code>
                </pre>
                <CopyButton text="payloadkit add feature-steps-block" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { FeatureStepsBlock } from './blocks/feature-steps-block'

export default buildConfig({
  // ... other config
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [FeatureStepsBlock], // Add here
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
            Everything included with the Feature Steps Block component.
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
                <CardTitle>Basic Implementation</CardTitle>
                <CardDescription>Simple feature steps with minimal configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Minimal setup
<FeatureStepsBlockComponent
  title="How It Works"
  steps={[
    { icon: 'target', title: 'Step 1', description: 'First step description' },
    { icon: 'lightbulb', title: 'Step 2', description: 'Second step description' }
  ]}
/>`}</code>
                  </pre>
                  <CopyButton text={`// Minimal setup
<FeatureStepsBlockComponent
  title="How It Works"
  steps={[
    { icon: 'target', title: 'Step 1', description: 'First step description' },
    { icon: 'lightbulb', title: 'Step 2', description: 'Second step description' }
  ]}
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
                <CardDescription>How to render the Feature Steps block in your React components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// src/blocks/RenderBlocks.tsx
import { FeatureStepsBlockComponent } from './feature-steps-block/Component'

const blockComponents = {
  'feature-steps-block': FeatureStepsBlockComponent,
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
import { FeatureStepsBlockComponent } from './feature-steps-block/Component'

const blockComponents = {
  'feature-steps-block': FeatureStepsBlockComponent,
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
          <CardDescription>Available props for the Feature Steps Block component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">sectionLayout</code>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> 'stacked' | 'two-column'</p>
                    <p className="text-sm"><strong>Default:</strong> 'stacked'</p>
                    <p className="text-sm text-muted-foreground">Overall section layout</p>
                  </div>
                </div>

                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">stepsLayout</code>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> 'grid-2' | 'grid-3' | 'grid-4' | 'vertical' | 'stair'</p>
                    <p className="text-sm"><strong>Default:</strong> 'grid-3'</p>
                    <p className="text-sm text-muted-foreground">Layout for steps section</p>
                  </div>
                </div>

                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">cardStyle</code>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> 'elevated' | 'flat' | 'minimal'</p>
                    <p className="text-sm"><strong>Default:</strong> 'elevated'</p>
                    <p className="text-sm text-muted-foreground">Visual style for step cards</p>
                  </div>
                </div>

                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">showStepNumbers</code>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> boolean</p>
                    <p className="text-sm"><strong>Default:</strong> true</p>
                    <p className="text-sm text-muted-foreground">Show numbered step indicators</p>
                  </div>
                </div>

                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">steps</code>
                    <Badge variant="destructive">Required</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> Step[]</p>
                    <p className="text-sm text-muted-foreground">Array of step objects with icon, title, description</p>
                  </div>
                </div>

                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">showAdvantages</code>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm"><strong>Type:</strong> boolean</p>
                    <p className="text-sm"><strong>Default:</strong> true</p>
                    <p className="text-sm text-muted-foreground">Show advantages section</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Available Icons</CardTitle>
          <CardDescription>Icons available for the steps</CardDescription>
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
    </div>
  )
}