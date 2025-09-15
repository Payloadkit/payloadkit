import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Star, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Feature Block',
  description: 'Advanced feature showcase block with icons, multiple layouts, and theme integration.',
}

const features = [
  '16 built-in Lucide React icons (Star, Lightning, Shield, Heart, etc.)',
  '4 layout options: 2-column, 3-column, 4-column grid, and vertical list',
  'Customizable icon colors and backgrounds',
  'Rich text support for descriptions',
  'Optional links with external/internal support',
  'Eyebrow text with badge or simple styling',
  'Background support (color, gradient, image)',
  'Responsive design with hover effects',
  'Theme integration with shadcn/ui colors',
  'Flexible spacing controls'
]

export default function FeatureBlockPage() {
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
            <Star className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Feature Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Marketing</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">Stable</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Advanced feature showcase block with icons, multiple layouts, and theme integration.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the feature block to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add feature-block</code>
                </pre>
                <CopyButton
                  text="payloadkit add feature-block"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { FeatureBlock } from './blocks/feature-block'

export default buildConfig({
  // ... other config
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [FeatureBlock], // Add here
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
            Everything included with the Feature Block component.
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
                <CardTitle>Basic Feature Block</CardTitle>
                <CardDescription>
                  Simple 3-column feature grid with icons and descriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`{
  "blockType": "feature-block",
  "title": "Why Choose Our Platform?",
  "description": "Discover the features that make us stand out.",
  "layout": "grid-3",
  "features": [
    {
      "icon": "star",
      "iconColor": "#3b82f6",
      "title": "Premium Quality",
      "description": "Built with the highest standards and attention to detail."
    },
    {
      "icon": "zap",
      "iconColor": "#10b981",
      "title": "Lightning Fast",
      "description": "Optimized for speed and performance."
    },
    {
      "icon": "shield",
      "iconColor": "#f59e0b",
      "title": "Secure & Reliable",
      "description": "Your data is safe with enterprise-grade security."
    }
  ]
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Configuration</CardTitle>
                <CardDescription>
                  Feature block with background, eyebrow text, and custom spacing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`{
  "blockType": "feature-block",
  "eyebrow": "Features",
  "eyebrowStyle": "badge",
  "title": "Everything You Need",
  "description": "Comprehensive features for modern applications.",
  "layout": "grid-2",
  "background": {
    "type": "color",
    "color": "#f8fafc"
  },
  "paddingTop": "xl",
  "paddingBottom": "xl",
  "features": [
    {
      "icon": "users",
      "iconColor": "#8b5cf6",
      "title": "Team Collaboration",
      "description": "Work together seamlessly with real-time updates.",
      "link": {
        "text": "Learn more",
        "url": "/collaboration",
        "newTab": false
      }
    },
    {
      "icon": "chart",
      "iconColor": "#06b6d4",
      "title": "Analytics Dashboard",
      "description": "Track performance with detailed analytics.",
      "link": {
        "text": "View demo",
        "url": "/demo",
        "newTab": true
      }
    }
  ]
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Component</CardTitle>
                <CardDescription>
                  Use the React component directly in your frontend application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { FeatureBlockComponent } from './blocks/feature-block'

export default function LandingPage() {
  const features = [
    {
      icon: 'star',
      iconColor: '#3b82f6',
      title: 'Premium Quality',
      description: 'Built with the highest standards.'
    },
    // ... more features
  ]

  return (
    <div>
      <FeatureBlockComponent
        title="Why Choose Our Platform?"
        layout="grid-3"
        features={features}
        paddingTop="lg"
        paddingBottom="lg"
      />
    </div>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Available Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Available Icons</CardTitle>
          <CardDescription>
            16 built-in Lucide React icons you can use for features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              'star', 'zap', 'shield', 'heart', 'settings', 'chart',
              'target', 'lightbulb', 'trophy', 'users', 'smartphone',
              'globe', 'lock', 'rocket', 'clock', 'check-circle'
            ].map((icon) => (
              <div key={icon} className="text-center space-y-2">
                <div className="w-10 h-10 bg-muted rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-xs font-mono">{icon}</span>
                </div>
                <span className="text-xs text-muted-foreground">{icon}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Layout Options */}
      <Card>
        <CardHeader>
          <CardTitle>Layout Options</CardTitle>
          <CardDescription>
            Choose from 4 different layout configurations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Grid Layouts</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>grid-2</code> - 2 columns on desktop</li>
                <li><code>grid-3</code> - 3 columns on desktop (default)</li>
                <li><code>grid-4</code> - 4 columns on desktop</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">List Layout</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>list</code> - Horizontal cards with icon on left</li>
              </ul>
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
                <li><code>lucide-react</code> - Icon library</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Registry Dependencies</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>blocks-shared</code> - Shared block components</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}