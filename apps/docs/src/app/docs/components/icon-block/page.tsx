import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Star, Zap, Shield, Heart, Settings, BarChart3, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Icon Block Component - PayloadKit',
  description: 'Icon-based content block with customizable icon, title and description, featuring multiple sizes and color variants.',
}

// Demo components for IconBlock
function StarFeatureDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg text-center">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900">
          <Star className="w-8 h-8 text-amber-600 dark:text-amber-400 fill-current" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
          <p className="text-sm text-muted-foreground">
            Unlock powerful capabilities with our premium tier, including advanced analytics
            and priority support.
          </p>
        </div>
      </div>
    </div>
  )
}

function SecurityBlockDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg">
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900">
          <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
          <p className="text-sm text-muted-foreground">
            Bank-level encryption and security measures to protect your data
            and user information at all times.
          </p>
        </div>
      </div>
    </div>
  )
}

function PerformanceDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg">
      <div className="flex items-start gap-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex-shrink-0">
          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
          <p className="text-sm text-muted-foreground">
            Optimized performance with sub-second loading times and real-time updates.
          </p>
        </div>
      </div>
    </div>
  )
}

const componentCode = `// IconBlock.tsx - Icon-based content component
'use client'

import {
  Star, Zap, Shield, Heart, Settings, BarChart3,
  CheckCircle, AlertTriangle, Info, Target, Rocket, Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  star: Star,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  settings: Settings,
  chart: BarChart3,
  check: CheckCircle,
  warning: AlertTriangle,
  info: Info,
  target: Target,
  rocket: Rocket,
  users: Users,
}

interface IconBlockProps {
  icon: keyof typeof iconMap
  title: string
  description: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  alignment?: 'left' | 'center' | 'right'
  layout?: 'vertical' | 'horizontal'
  className?: string
}

export function IconBlock({
  icon,
  title,
  description,
  size = 'medium',
  color = 'primary',
  alignment = 'center',
  layout = 'vertical',
  className
}: IconBlockProps) {
  const IconComponent = iconMap[icon]

  const sizeClasses = {
    small: { container: 'w-8 h-8', icon: 'w-4 h-4', title: 'text-base' },
    medium: { container: 'w-12 h-12', icon: 'w-6 h-6', title: 'text-lg' },
    large: { container: 'w-16 h-16', icon: 'w-8 h-8', title: 'text-xl' }
  }

  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary-foreground',
    success: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400',
    danger: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400',
    info: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
  }

  const alignmentClasses = {
    left: layout === 'vertical' ? 'text-left items-start' : 'text-left',
    center: layout === 'vertical' ? 'text-center items-center' : 'text-center',
    right: layout === 'vertical' ? 'text-right items-end' : 'text-right'
  }

  const containerClasses = cn(
    'space-y-3',
    layout === 'horizontal' ? 'flex items-start gap-4' : 'flex flex-col',
    alignmentClasses[alignment],
    className
  )

  const iconContainerClasses = cn(
    'inline-flex items-center justify-center rounded-lg flex-shrink-0',
    sizeClasses[size].container,
    colorClasses[color]
  )

  return (
    <div className={containerClasses}>
      <div className={iconContainerClasses}>
        <IconComponent className={sizeClasses[size].icon} />
      </div>

      <div className={layout === 'horizontal' ? 'flex-1' : ''}>
        <h3 className={cn(
          'font-semibold mb-2',
          sizeClasses[size].title
        )}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}`

const configCode = `// config.ts - PayloadCMS Block Configuration
import type { Block } from 'payload'

export const IconBlock: Block = {
  slug: 'icon-block',
  labels: {
    singular: 'Icon Block',
    plural: 'Icon Blocks',
  },
  fields: [
    {
      name: 'icon',
      type: 'select',
      label: 'Icon',
      required: true,
      options: [
        { label: '⭐ Star', value: 'star' },
        { label: '⚡ Zap', value: 'zap' },
        { label: '🛡️ Shield', value: 'shield' },
        { label: '❤️ Heart', value: 'heart' },
        { label: '⚙️ Settings', value: 'settings' },
        { label: '📊 Chart', value: 'chart' },
        { label: '✅ Check', value: 'check' },
        { label: '⚠️ Warning', value: 'warning' },
        { label: 'ℹ️ Info', value: 'info' },
        { label: '🎯 Target', value: 'target' },
        { label: '🚀 Rocket', value: 'rocket' },
        { label: '👥 Users', value: 'users' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'color',
      type: 'select',
      label: 'Color Theme',
      defaultValue: 'primary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Danger', value: 'danger' },
        { label: 'Info', value: 'info' },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Alignment',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'vertical',
      options: [
        { label: 'Vertical', value: 'vertical' },
        { label: 'Horizontal', value: 'horizontal' },
      ],
    },
  ],
}`

const usageCode = `// Using IconBlock in your pages
import { IconBlock } from '@/blocks/icon-block'

// Add to your collection configuration
export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        IconBlock,
        // Other blocks...
      ],
    },
  ],
}

// Frontend rendering
import { IconBlock } from '@/blocks/icon-block'

export default function RenderBlocks({ blocks }: { blocks: any[] }) {
  return (
    <div>
      {blocks?.map((block, index) => {
        if (block.blockType === 'icon-block') {
          return (
            <IconBlock
              key={index}
              icon={block.icon}
              title={block.title}
              description={block.description}
              size={block.size}
              color={block.color}
              alignment={block.alignment}
              layout={block.layout}
            />
          )
        }
        return null
      })}
    </div>
  )
}`

export default function IconBlockPage() {
  const steps = [
    {
      title: 'Install IconBlock',
      keyword: 'Install',
      description: 'Add the icon block to your PayloadCMS project',
      content: (
        <Snippet command="payloadkit add icon-block">
          Install IconBlock component with 12+ built-in Lucide icons and customization options.
        </Snippet>
      )
    },
    {
      title: 'Install Lucide Icons',
      keyword: 'Icons Setup',
      description: 'Ensure Lucide React icons are available',
      content: (
        <CodeBlock
          code={`# Install Lucide React icons
npm install lucide-react

# Icons are automatically included in the IconBlock component
# No additional configuration needed!`}
          language="bash"
        />
      )
    },
    {
      title: 'Add to Collection',
      keyword: 'Integration',
      description: 'Add IconBlock to your page or post blocks',
      content: (
        <CodeBlock
          code={`import { IconBlock } from '@/blocks/icon-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        IconBlock,
        // Other blocks...
      ],
    },
  ],
}`}
          language="typescript"
        />
      )
    },
    {
      title: 'Customize Icons',
      keyword: 'Customization',
      description: 'Add more icons or customize the icon map',
      content: (
        <CodeBlock
          code={`// Extend the iconMap in IconBlock component
import { Calendar, Mail, Phone, MapPin } from 'lucide-react'

const iconMap = {
  // Existing icons...
  star: Star,
  zap: Zap,
  // Add new icons
  calendar: Calendar,
  mail: Mail,
  phone: Phone,
  location: MapPin,
}

// Update the PayloadCMS field options
options: [
  // Existing options...
  { label: '📅 Calendar', value: 'calendar' },
  { label: '✉️ Mail', value: 'mail' },
  { label: '📞 Phone', value: 'phone' },
  { label: '📍 Location', value: 'location' },
]`}
          language="typescript"
        />
      )
    }
  ]

  const apiProps = [
    {
      name: 'icon',
      type: 'IconName',
      description: 'Icon name from the predefined icon map',
      required: true,
      example: 'icon="star"'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Title text displayed below the icon',
      required: true,
      example: 'title="Premium Features"'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Description text providing more details',
      required: true,
      example: 'description="Unlock powerful capabilities..."'
    },
    {
      name: 'size',
      type: "'small' | 'medium' | 'large'",
      description: 'Size of the icon and overall block',
      defaultValue: "'medium'",
      required: false
    },
    {
      name: 'color',
      type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
      description: 'Color theme for the icon background',
      defaultValue: "'primary'",
      required: false
    },
    {
      name: 'alignment',
      type: "'left' | 'center' | 'right'",
      description: 'Text alignment for the block',
      defaultValue: "'center'",
      required: false
    },
    {
      name: 'layout',
      type: "'vertical' | 'horizontal'",
      description: 'Layout orientation of icon and content',
      defaultValue: "'vertical'",
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply',
      required: false
    }
  ]

  const availableIcons = [
    { name: 'star', icon: Star, label: 'Star' },
    { name: 'zap', icon: Zap, label: 'Zap' },
    { name: 'shield', icon: Shield, label: 'Shield' },
    { name: 'heart', icon: Heart, label: 'Heart' },
    { name: 'settings', icon: Settings, label: 'Settings' },
    { name: 'chart', icon: BarChart3, label: 'Chart' },
    { name: 'check', icon: CheckCircle, label: 'Check' },
    { name: 'warning', icon: AlertTriangle, label: 'Warning' },
    { name: 'info', icon: Info, label: 'Info' },
  ]

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/components">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Icon Block"
        description="Icon-based content block with customizable icon, title and description, featuring multiple sizes and color variants."
        category="components"
        version="0.1.0"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="3 minutes"
        lastUpdated="January 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Icon Block Examples"
        description="Interactive demonstrations of different icon configurations and layouts"
        variants={[
          {
            name: 'Star Feature',
            description: 'Centered vertical layout with large star icon',
            component: <StarFeatureDemo />
          },
          {
            name: 'Security Block',
            description: 'Medium-sized shield icon with left alignment',
            component: <SecurityBlockDemo />
          },
          {
            name: 'Performance',
            description: 'Horizontal layout with zap icon',
            component: <PerformanceDemo />
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
        title="IconBlock Props"
        description="Configuration options for the IconBlock component"
        props={apiProps}
      />

      {/* Available Icons */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Available Icons</div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {availableIcons.map((item) => (
            <div key={item.name} className="p-4 border rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground font-mono">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Plus 3 more icons: target, rocket, users. All icons are from Lucide React.
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Color Variants</div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div className="text-sm font-medium">Primary</div>
            <div className="text-xs text-muted-foreground">Default brand color</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm font-medium">Success</div>
            <div className="text-xs text-muted-foreground">Positive actions</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-sm font-medium">Warning</div>
            <div className="text-xs text-muted-foreground">Caution states</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="text-sm font-medium">Danger</div>
            <div className="text-xs text-muted-foreground">Error states</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
              <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm font-medium">Info</div>
            <div className="text-xs text-muted-foreground">Informational</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
              <Settings className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div className="text-sm font-medium">Secondary</div>
            <div className="text-xs text-muted-foreground">Secondary actions</div>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Configuration Examples</div>
        <CodeBlock
          code={`// Feature highlight with star icon
{
  blockType: 'icon-block',
  icon: 'star',
  title: 'Premium Features',
  description: 'Access advanced tools and capabilities',
  size: 'large',
  color: 'primary',
  alignment: 'center'
}

// Security feature in horizontal layout
{
  blockType: 'icon-block',
  icon: 'shield',
  title: 'Enterprise Security',
  description: 'Bank-level encryption protects your data',
  layout: 'horizontal',
  alignment: 'left',
  color: 'success'
}

// Warning message block
{
  blockType: 'icon-block',
  icon: 'warning',
  title: 'Important Notice',
  description: 'Please review your settings before proceeding',
  size: 'small',
  color: 'warning',
  alignment: 'center'
}`}
          language="typescript"
          title="Block Configuration Examples"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="components"
        dependencies={['lucide-react', 'payload', 'react', 'tailwindcss']}
        tags={['icon', 'content', 'features', 'lucide', 'block', 'ui', 'visual']}
      />
    </div>
  )
}