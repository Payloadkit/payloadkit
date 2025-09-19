import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Star, Zap, Shield, Users, Smartphone, Trophy } from 'lucide-react'

// Import our new documentation components
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Feature Block - PayloadKit',
  description: 'Advanced feature showcase block with icons, multiple layouts, and theme integration for marketing sections.',
}

// Demo components for different variants
function FeatureDefault() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <p className="text-sm font-medium text-blue-600">Features</p>
          <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make us stand out from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-muted-foreground">
              Built with the highest standards and attention to detail.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Optimized for speed and performance across all devices.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              Your data is safe with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureList() {
  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Everything You Need</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive features for modern applications.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Work together seamlessly with real-time updates and shared workspaces.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-600">
                Learn more →
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-cyan-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Mobile Optimized</h3>
              <p className="text-muted-foreground">
                Perfect experience across all devices with responsive design.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-600">
                View demo →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureGrid4() {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Advanced Features
          </div>
          <h2 className="text-3xl font-bold">Complete Solution</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All the tools and features you need to build exceptional applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, color: 'blue', title: 'Quality', desc: 'Premium standards' },
            { icon: Zap, color: 'green', title: 'Speed', desc: 'Lightning fast' },
            { icon: Shield, color: 'orange', title: 'Security', desc: 'Enterprise-grade' },
            { icon: Trophy, color: 'purple', title: 'Success', desc: 'Proven results' }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center space-y-3">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mx-auto`}>
                  <Icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function FeatureBlockPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/blocks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blocks
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Feature Block"
        description="Advanced feature showcase block with icons, multiple layouts, and theme integration for marketing sections."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="intermediate"
        estimatedTime="15 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview with variants */}
      <ComponentPreview
        name="Feature Block Preview"
        description="Interactive demonstration of the Feature Block with different layouts, icons, and styling options."
        variants={[
          {
            name: "Default Grid",
            description: "Standard 3-column feature grid with icons, titles, and descriptions",
            component: <FeatureDefault />
          },
          {
            name: "List Layout",
            description: "Horizontal list layout with larger icons and action links",
            component: <FeatureList />
          },
          {
            name: "4-Column Grid",
            description: "Compact 4-column grid with eyebrow text and gradient background",
            component: <FeatureGrid4 />
          }
        ]}
        code={{
          component: `'use client'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import {
  Star,
  Zap,
  Shield,
  Heart,
  Settings,
  BarChart3,
  Target,
  Lightbulb,
  Trophy,
  Users,
  Smartphone,
  Globe,
  Lock,
  Rocket,
  Clock,
  CheckCircle
} from 'lucide-react'

const iconMap = {
  star: Star,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  settings: Settings,
  chart: BarChart3,
  target: Target,
  lightbulb: Lightbulb,
  trophy: Trophy,
  users: Users,
  smartphone: Smartphone,
  globe: Globe,
  lock: Lock,
  rocket: Rocket,
  clock: Clock,
  'check-circle': CheckCircle
}

interface FeatureBlockProps {
  eyebrow?: string
  eyebrowStyle?: 'text' | 'badge'
  title?: string
  description?: string
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list'
  features?: Array<{
    icon: keyof typeof iconMap
    iconColor?: string
    title: string
    description: string
    link?: {
      text: string
      url: string
      newTab?: boolean
    }
  }>
  background?: {
    type?: 'color' | 'gradient' | 'image'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    image?: string
  }
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl'
}

export function FeatureBlock({
  eyebrow,
  eyebrowStyle = 'text',
  title,
  description,
  layout = 'grid-3',
  features = [],
  background,
  paddingTop = 'lg',
  paddingBottom = 'lg'
}: FeatureBlockProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  const layoutClasses = {
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'grid-3': 'grid-cols-1 md:grid-cols-3',
    'grid-4': 'grid-cols-2 md:grid-cols-4',
    'list': 'grid-cols-1 gap-6'
  }

  const backgroundStyle = background?.type === 'image'
    ? {
        backgroundImage: \`url(\${background.image})\`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : background?.type === 'gradient'
    ? {
        background: \`linear-gradient(to bottom right, \${background.gradientFrom}, \${background.gradientTo})\`
      }
    : background?.color
    ? { backgroundColor: background.color }
    : {}

  return (
    <div
      className={\`\${paddingClasses[paddingTop]} \${paddingClasses[paddingBottom]}\`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        {(eyebrow || title || description) && (
          <div className={\`text-center space-y-4 mb-12 \${layout === 'list' ? 'text-left' : ''}\`}>
            {eyebrow && (
              <div className="space-y-2">
                {eyebrowStyle === 'badge' ? (
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {eyebrow}
                  </div>
                ) : (
                  <p className="text-sm font-medium text-primary">{eyebrow}</p>
                )}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features */}
        <div className={\`grid gap-8 \${layoutClasses[layout]}\`}>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Star

            return (
              <div
                key={index}
                className={\`\${
                  layout === 'list'
                    ? 'flex items-start gap-4'
                    : 'text-center space-y-4'
                }\`}
              >
                <div
                  className={\`\${
                    layout === 'list'
                      ? 'w-12 h-12'
                      : 'w-16 h-16 mx-auto'
                  } bg-gray-100 rounded-lg flex items-center justify-center\`}
                  style={{
                    backgroundColor: feature.iconColor ? \`\${feature.iconColor}15\` : undefined
                  }}
                >
                  <IconComponent
                    className={\`\${
                      layout === 'list' ? 'w-6 h-6' : 'w-8 h-8'
                    }\`}
                    style={{ color: feature.iconColor }}
                  />
                </div>

                <div className={\`\${layout === 'list' ? 'flex-1 space-y-2' : 'space-y-2'}\`}>
                  <h3 className={\`\${
                    layout === 'list' ? 'text-lg' : 'text-xl'
                  } font-semibold\`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <CMSLink
                      {...feature.link}
                      appearance="link"
                      size="sm"
                    >
                      {feature.link.text}
                    </CMSLink>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}`,
          config: `import { Block } from 'payload/types'

export const FeatureBlock: Block = {
  slug: 'feature-block',
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow Text',
      type: 'text',
    },
    {
      name: 'eyebrowStyle',
      label: 'Eyebrow Style',
      type: 'select',
      defaultValue: 'text',
      options: [
        { label: 'Simple Text', value: 'text' },
        { label: 'Badge Style', value: 'badge' },
      ],
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'select',
      defaultValue: 'grid-3',
      options: [
        { label: '2 Columns', value: 'grid-2' },
        { label: '3 Columns', value: 'grid-3' },
        { label: '4 Columns', value: 'grid-4' },
        { label: 'List Layout', value: 'list' },
      ],
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Star', value: 'star' },
            { label: 'Lightning', value: 'zap' },
            { label: 'Shield', value: 'shield' },
            { label: 'Heart', value: 'heart' },
            { label: 'Settings', value: 'settings' },
            { label: 'Chart', value: 'chart' },
            { label: 'Target', value: 'target' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Trophy', value: 'trophy' },
            { label: 'Users', value: 'users' },
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Globe', value: 'globe' },
            { label: 'Lock', value: 'lock' },
            { label: 'Rocket', value: 'rocket' },
            { label: 'Clock', value: 'clock' },
            { label: 'Check Circle', value: 'check-circle' },
          ],
        },
        {
          name: 'iconColor',
          label: 'Icon Color',
          type: 'text',
          admin: {
            description: 'Hex color code (e.g., #3b82f6)',
          },
        },
        {
          name: 'title',
          label: 'Feature Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Feature Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          label: 'Optional Link',
          type: 'group',
          fields: [
            {
              name: 'text',
              label: 'Link Text',
              type: 'text',
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
            },
            {
              name: 'newTab',
              label: 'Open in New Tab',
              type: 'checkbox',
            },
          ],
        },
      ],
    },
    {
      name: 'background',
      label: 'Background',
      type: 'group',
      fields: [
        {
          name: 'type',
          label: 'Background Type',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Solid Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' },
          ],
        },
        {
          name: 'color',
          label: 'Background Color',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'color',
          },
        },
        {
          name: 'gradientFrom',
          label: 'Gradient From',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'gradient',
          },
        },
        {
          name: 'gradientTo',
          label: 'Gradient To',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'gradient',
          },
        },
        {
          name: 'image',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, { type }) => type === 'image',
          },
        },
      ],
    },
    {
      name: 'paddingTop',
      label: 'Padding Top',
      type: 'select',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
    {
      name: 'paddingBottom',
      label: 'Padding Bottom',
      type: 'select',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
  ],
}`,
          usage: `// In your page component
import { FeatureBlock } from '@/components/blocks/feature-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'feature-block') {
          return <FeatureBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleFeatures = {
  eyebrow: "Features",
  eyebrowStyle: "badge",
  title: "Why Choose Our Platform?",
  description: "Discover the features that make us stand out from the competition.",
  layout: "grid-3",
  features: [
    {
      icon: "star",
      iconColor: "#3b82f6",
      title: "Premium Quality",
      description: "Built with the highest standards and attention to detail."
    },
    {
      icon: "zap",
      iconColor: "#10b981",
      title: "Lightning Fast",
      description: "Optimized for speed and performance across all devices.",
      link: {
        text: "Learn more",
        url: "/performance",
        newTab: false
      }
    },
    {
      icon: "shield",
      iconColor: "#f59e0b",
      title: "Secure & Reliable",
      description: "Your data is safe with enterprise-grade security."
    }
  ],
  paddingTop: "lg",
  paddingBottom: "lg"
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Feature Block',
            keyword: 'Install',
            description: 'Add the Feature Block to your PayloadKit project using the CLI.',
            content: (
              <Snippet
                command="bunx payloadkit@latest add feature-block"
                title="Install via PayloadKit CLI"
              >
                This will copy the Feature Block files into your project and update your registry.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS configuration.',
            content: (
              <CodeBlock
                code={`import { FeatureBlock } from '@/blocks/feature-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            FeatureBlock, // Add here
          ],
        },
      ],
    },
  ],
})`}
                language="typescript"
                title="payload.config.ts"
              />
            )
          },
          {
            title: 'Render in Frontend',
            keyword: 'Implement',
            description: 'Use the block component in your React frontend.',
            content: (
              <CodeBlock
                code={`import { FeatureBlock } from '@/components/blocks/feature-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'feature-block') {
          return <FeatureBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Customize (Optional)',
            keyword: 'Customize',
            description: 'Modify the component to match your design requirements.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Since the code is copied into your project, you can customize:
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Add new icons to the iconMap</li>
                  <li>Modify layout options and grid styles</li>
                  <li>Customize background and spacing options</li>
                  <li>Add hover effects and animations</li>
                </ul>
              </div>
            ),
            optional: true
          }
        ]}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="API Reference"
        description="Complete reference for all props and configuration options available for the Feature Block component."
        props={[
          {
            name: 'eyebrow',
            type: 'string',
            description: 'Small text displayed above the main title',
            example: 'eyebrow="Features"'
          },
          {
            name: 'eyebrowStyle',
            type: '"text" | "badge"',
            description: 'Style of the eyebrow text - simple text or badge',
            defaultValue: '"text"',
            example: 'eyebrowStyle="badge"'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Main heading text of the feature section',
            example: 'title="Why Choose Our Platform?"'
          },
          {
            name: 'description',
            type: 'string',
            description: 'Descriptive text displayed below the title',
            example: 'description="Discover the features that make us stand out..."'
          },
          {
            name: 'layout',
            type: '"grid-2" | "grid-3" | "grid-4" | "list"',
            description: 'Layout configuration for displaying features',
            defaultValue: '"grid-3"',
            example: 'layout="grid-2"'
          },
          {
            name: 'features',
            type: 'FeatureConfig[]',
            description: 'Array of feature items with icons, titles, and descriptions',
            defaultValue: '[]',
            example: '[{ icon: "star", title: "Quality", description: "Built with standards" }]'
          },
          {
            name: 'background',
            type: 'BackgroundConfig',
            description: 'Background styling options - color, gradient, or image',
            example: '{ type: "gradient", gradientFrom: "#3b82f6", gradientTo: "#1d4ed8" }'
          },
          {
            name: 'paddingTop',
            type: '"sm" | "md" | "lg" | "xl"',
            description: 'Top padding/spacing of the section',
            defaultValue: '"lg"',
            example: 'paddingTop="xl"'
          },
          {
            name: 'paddingBottom',
            type: '"sm" | "md" | "lg" | "xl"',
            description: 'Bottom padding/spacing of the section',
            defaultValue: '"lg"',
            example: 'paddingBottom="xl"'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>

        <div className="space-y-4">
          <CodeBlock
            title="FeatureConfig Interface"
            code={`interface FeatureConfig {
  icon: keyof typeof iconMap     // Available Lucide React icons
  iconColor?: string             // Hex color code for icon
  title: string                  // Feature title
  description: string            // Feature description
  link?: {                       // Optional call-to-action link
    text: string
    url: string
    newTab?: boolean
  }
}`}
            language="typescript"
          />

          <CodeBlock
            title="BackgroundConfig Interface"
            code={`interface BackgroundConfig {
  type?: 'color' | 'gradient' | 'image'
  color?: string                 // Hex color for solid background
  gradientFrom?: string          // Start color for gradient
  gradientTo?: string            // End color for gradient
  image?: string                 // Image URL for background
}`}
            language="typescript"
          />

          <CodeBlock
            title="Available Icons"
            code={`// 16 built-in Lucide React icons
type IconNames =
  | 'star' | 'zap' | 'shield' | 'heart'
  | 'settings' | 'chart' | 'target' | 'lightbulb'
  | 'trophy' | 'users' | 'smartphone' | 'globe'
  | 'lock' | 'rocket' | 'clock' | 'check-circle'`}
            language="typescript"
          />
        </div>
      </div>

      {/* Tags and Dependencies at the bottom */}
      <PageTags
        category="blocks"
        dependencies={[
          '@/components/RichText',
          '@/components/Link',
          'lucide-react',
          'react',
          'tailwindcss'
        ]}
        tags={[
          'Features',
          'Marketing',
          'Icons',
          'Grid Layout',
          'List Layout',
          'Responsive',
          'Customizable',
          'PayloadCMS',
          'React',
          'TypeScript'
        ]}
      />
    </div>
  )
}