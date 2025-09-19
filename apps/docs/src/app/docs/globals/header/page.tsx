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
  title: 'Header Global - PayloadKit',
  description: 'Configurable header global with navigation management for PayloadCMS applications.',
}

// Header preview component
function HeaderPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto border rounded-lg overflow-hidden bg-white shadow-sm">
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <span className="font-semibold text-lg">Your Brand</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

const configCode = `// config.ts - PayloadCMS Global Configuration
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header Settings',
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          label: 'Logo Image'
        },
        {
          name: 'text',
          type: 'text',
          label: 'Logo Text',
          defaultValue: 'Your Brand'
        }
      ]
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true
        },
        {
          name: 'type',
          type: 'select',
          label: 'Link Type',
          defaultValue: 'page',
          options: [
            { label: 'Page', value: 'page' },
            { label: 'Custom URL', value: 'custom' }
          ]
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Page',
          admin: {
            condition: (data: any) => data.type === 'page'
          }
        },
        {
          name: 'url',
          type: 'text',
          label: 'Custom URL',
          admin: {
            condition: (data: any) => data.type === 'custom'
          }
        }
      ]
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show CTA Button',
          defaultValue: true
        },
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
          defaultValue: 'Get Started',
          admin: {
            condition: (data: any) => data.enabled
          }
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
          admin: {
            condition: (data: any) => data.enabled
          }
        }
      ]
    }
  ]
}`

const usageCode = `// Usage in layout or components
import { Header } from '@/globals/Header'

// Fetch header data
async function getHeaderData() {
  const response = await fetch('/api/globals/header')
  return response.json()
}

export default async function SiteHeader() {
  const headerData = await getHeaderData()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {headerData.logo?.image && (
              <img
                src={headerData.logo.image.url}
                alt="Logo"
                className="w-8 h-8"
              />
            )}
            <span className="font-semibold text-lg">
              {headerData.logo?.text || 'Your Brand'}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {headerData.navigation?.map((item: any, index: number) => (
              <a
                key={index}
                href={item.type === 'page' ? \`/\${item.page.slug}\` : item.url}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {headerData.cta?.enabled && (
            <a
              href={headerData.cta.link}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {headerData.cta.label}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}`

export default function HeaderGlobalPage() {
  const steps = [
    {
      title: 'Install Header Global',
      keyword: 'Install',
      description: 'Add the header global to your PayloadCMS project',
      content: (
        <Snippet command="bunx payloadkit add Header">
          Install the header global using the PayloadKit CLI. This adds all necessary files and dependencies.
        </Snippet>
      )
    },
    {
      title: 'Configure PayloadCMS',
      keyword: 'Configure',
      description: 'Add the header global to your Payload configuration',
      content: (
        <CodeBlock
          code={`import { Header } from './globals/Header'

export default buildConfig({
  globals: [Header],
  // ... rest of config
})`}
          language="typescript"
        />
      )
    },
    {
      title: 'Create Header Component',
      keyword: 'Implement',
      description: 'Create a React component to render your header',
      content: (
        <CodeBlock
          code={usageCode}
          language="tsx"
        />
      )
    },
    {
      title: 'Configure Header',
      keyword: 'Setup',
      description: 'Set up your header in PayloadCMS admin',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Navigate to <code>yourdomain.com/admin/globals/header</code> to configure:
          </p>
          <ul className="text-sm space-y-2">
            <li>• Upload logo image or set text logo</li>
            <li>• Add navigation menu items</li>
            <li>• Configure call-to-action button</li>
            <li>• Link to pages or custom URLs</li>
          </ul>
        </div>
      )
    }
  ]

  const apiProps = [
    {
      name: 'logo',
      type: 'object',
      description: 'Logo configuration with image and/or text',
      required: false
    },
    {
      name: 'navigation',
      type: 'array',
      description: 'Array of navigation menu items',
      required: false
    },
    {
      name: 'cta',
      type: 'object',
      description: 'Call-to-action button configuration',
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
        title="Header Global"
        description="Configurable header global with navigation management for PayloadCMS applications."
        category="globals"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Header Preview"
        description="Interactive demonstration of a configurable header with logo, navigation, and CTA button"
        variants={[
          {
            name: 'Default',
            description: 'Standard header layout with logo, navigation, and CTA',
            component: <HeaderPreview />
          }
        ]}
        code={{
          config: configCode,
          usage: usageCode
        }}
        responsive
      />

      {/* Tutorial Steps */}
      <TutorialSteps
        title="Installation & Setup"
        steps={steps}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="Header Global Fields"
        description="Complete reference for the Header global configuration"
        props={apiProps}
      />

      {/* Tags */}
      <PageTags
        category="globals"
        dependencies={['payload', 'react']}
        tags={['header', 'navigation', 'logo', 'menu', 'cta', 'site-wide']}
      />
    </div>
  )
}