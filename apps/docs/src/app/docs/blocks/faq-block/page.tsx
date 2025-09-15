import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, HelpCircle, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'FAQ Block',
  description: 'Interactive FAQ block with accordion functionality, icons, and flexible layouts.',
}

const features = [
  '✨ NEW: Built with shadcn/ui Accordion component for better accessibility',
  '✨ NEW: Full Radix UI integration with WCAG-compliant keyboard navigation',
  '✨ NEW: Single or multiple expandable modes (collapsible support)',
  'Accordion-style FAQ items with smooth native animations',
  '15 optional Lucide React icons for questions',
  'Two layout options: single column or two-column (title left, FAQ right)',
  'Customizable borders between FAQ items',
  'Background support (color, gradient, image)',
  'Rich text support for answers',
  'Card background styling options',
  'Responsive design with mobile-first approach',
  'Theme integration with shadcn/ui design tokens',
  'Native focus management and screen reader support'
]

export default function FaqBlockPage() {
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
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">FAQ Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Content</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">Stable</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Interactive FAQ block with accordion functionality, icons, and flexible layouts.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the FAQ block to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add faq-block</code>
                </pre>
                <CopyButton
                  text="payloadkit add faq-block"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { FaqBlock } from './blocks/faq-block'

export default buildConfig({
  // ... other config
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [FaqBlock], // Add here
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
            Everything included with the FAQ Block component.
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
                <CardTitle>Basic FAQ Block</CardTitle>
                <CardDescription>
                  Simple single-column FAQ with accordion functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`{
  "blockType": "faq-block",
  "title": "Frequently Asked Questions",
  "description": "Find answers to common questions about our service.",
  "layout": "single",
  "showBorder": true,
  "type": "single",
  "collapsible": true,
  "faqs": [
    {
      "icon": "help-circle",
      "question": "How do I get started?",
      "answer": "Simply sign up for an account and follow our quick setup guide."
    },
    {
      "icon": "lightbulb",
      "question": "What features are included?",
      "answer": "Our platform includes all the tools you need for modern development."
    },
    {
      "icon": "settings",
      "question": "Can I customize the interface?",
      "answer": "Yes! You have full control over themes, layouts, and functionality."
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
                <CardTitle>Two-Column Layout</CardTitle>
                <CardDescription>
                  FAQ with title on the left and questions on the right, custom background.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`{
  "blockType": "faq-block",
  "eyebrow": "Support",
  "title": "Got Questions?",
  "description": "We're here to help with any questions you might have.",
  "layout": "two-column",
  "showBorder": false,
  "type": "multiple",
  "collapsible": true,
  "defaultValue": ["item-0"],
  "background": {
    "type": "color",
    "color": "#f8fafc"
  },
  "cardBackground": "#ffffff",
  "paddingTop": "xl",
  "paddingBottom": "xl",
  "faqs": [
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      "icon": "lock",
      "question": "Is my data secure?",
      "answer": "Absolutely. We use enterprise-grade encryption and security measures."
    },
    {
      "icon": "smartphone",
      "question": "Do you have a mobile app?",
      "answer": "Yes! Our mobile app is available for both iOS and Android devices."
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
                  <code>{`import { FaqBlockComponent } from './blocks/faq-block'

export default function SupportPage() {
  const faqs = [
    {
      icon: 'help-circle',
      question: 'How do I get started?',
      answer: 'Simply sign up for an account and follow our quick setup guide.'
    },
    // ... more FAQs
  ]

  return (
    <div>
      <FaqBlockComponent
        title="Frequently Asked Questions"
        layout="single"
        showBorder={true}
        type="single"
        collapsible={true}
        defaultValue="item-0"
        faqs={faqs}
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
            15 built-in Lucide React icons you can use for FAQ items.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              'help-circle', 'lightbulb', 'zap', 'target', 'star',
              'clipboard', 'search', 'message-circle', 'smartphone',
              'timer', 'lock', 'rocket', 'check-circle', 'settings'
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
            Choose between single column or two-column layouts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Single Column</h4>
              <p className="text-sm text-muted-foreground">
                All content stacked vertically with centered title and description.
                Best for simple FAQ sections.
              </p>
              <code className="text-sm bg-muted px-2 py-1 rounded">layout: "single"</code>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Two Column</h4>
              <p className="text-sm text-muted-foreground">
                Title and description on the left, FAQ items on the right.
                Great for complex layouts with more content.
              </p>
              <code className="text-sm bg-muted px-2 py-1 rounded">layout: "two-column"</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Styling Options */}
      <Card>
        <CardHeader>
          <CardTitle>Styling Options</CardTitle>
          <CardDescription>
            Customize the appearance of your FAQ block.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Borders</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Control whether borders appear between FAQ items.
              </p>
              <code className="text-sm bg-muted px-2 py-1 rounded">showBorder: true | false</code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Card Background</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Set a custom background color for the FAQ card container.
              </p>
              <code className="text-sm bg-muted px-2 py-1 rounded">cardBackground: "#ffffff"</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accordion Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Accordion Configuration</CardTitle>
          <CardDescription>
            Configure the behavior and interaction of the FAQ accordion.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Type</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Controls how many FAQ items can be open at once.
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <code className="text-sm bg-muted px-2 py-1 rounded">type: "single"</code>
                  <p className="text-xs text-muted-foreground mt-1">Only one FAQ can be open at a time</p>
                </div>
                <div>
                  <code className="text-sm bg-muted px-2 py-1 rounded">type: "multiple"</code>
                  <p className="text-xs text-muted-foreground mt-1">Multiple FAQs can be open simultaneously</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collapsible</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Whether the accordion items can be collapsed after being opened.
              </p>
              <code className="text-sm bg-muted px-2 py-1 rounded">collapsible: true | false</code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Default Value</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Set which FAQ items are open by default when the component loads.
              </p>
              <div className="grid gap-2">
                <div>
                  <code className="text-sm bg-muted px-2 py-1 rounded">defaultValue: "item-0"</code>
                  <p className="text-xs text-muted-foreground mt-1">For single type: opens the first FAQ</p>
                </div>
                <div>
                  <code className="text-sm bg-muted px-2 py-1 rounded">defaultValue: ["item-0", "item-2"]</code>
                  <p className="text-xs text-muted-foreground mt-1">For multiple type: opens first and third FAQs</p>
                </div>
              </div>
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
                <li><code>@radix-ui/react-accordion</code> - Accessible accordion primitives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Registry Dependencies</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code>blocks-shared</code> - Shared block components</li>
                <li><code>ui/accordion</code> - shadcn/ui Accordion component</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}