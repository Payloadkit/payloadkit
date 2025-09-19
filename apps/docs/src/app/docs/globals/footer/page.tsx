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
  title: 'Footer Global - PayloadKit',
  description: 'Configurable footer global with social links, copyright, and multi-column navigation for PayloadCMS applications.',
}

// Footer preview component
function FooterPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto border rounded-lg overflow-hidden bg-white shadow-sm">
      <footer className="bg-gray-900 text-white px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <span className="font-semibold text-lg">Your Brand</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building amazing experiences with modern web technologies.
            </p>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-xs">T</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-xs">L</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-xs">G</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Your Brand. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const configCode = `// config.ts - PayloadCMS Global Configuration
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Settings',
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'brand',
      type: 'group',
      label: 'Brand Section',
      fields: [
        {
          name: 'logo',
          type: 'relationship',
          relationTo: 'media',
          label: 'Logo Image'
        },
        {
          name: 'name',
          type: 'text',
          label: 'Brand Name',
          defaultValue: 'Your Brand'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: 'Building amazing experiences with modern web technologies.'
        }
      ]
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Column Title',
          required: true
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
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
        }
      ]
    },
    {
      name: 'social',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          required: true,
          options: [
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' }
          ]
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true
        }
      ]
    },
    {
      name: 'bottom',
      type: 'group',
      label: 'Bottom Section',
      fields: [
        {
          name: 'copyright',
          type: 'text',
          label: 'Copyright Text',
          defaultValue: '© 2025 Your Brand. All rights reserved.'
        },
        {
          name: 'legalLinks',
          type: 'array',
          label: 'Legal Links',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true
            }
          ]
        }
      ]
    }
  ]
}`

const usageCode = `// Usage in layout or components
import { Footer } from '@/globals/Footer'

// Fetch footer data
async function getFooterData() {
  const response = await fetch('/api/globals/footer')
  return response.json()
}

export default async function SiteFooter() {
  const footerData = await getFooterData()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {footerData.brand?.logo && (
                <img
                  src={footerData.brand.logo.url}
                  alt="Logo"
                  className="w-8 h-8"
                />
              )}
              <span className="font-semibold text-lg">
                {footerData.brand?.name || 'Your Brand'}
              </span>
            </div>
            {footerData.brand?.description && (
              <p className="text-gray-400 text-sm">
                {footerData.brand.description}
              </p>
            )}
          </div>

          {/* Footer Columns */}
          {footerData.columns?.map((column: any, index: number) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {column.links?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href={link.type === 'page' ? \`/\${link.page.slug}\` : link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          {footerData.social && footerData.social.length > 0 && (
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {footerData.social.map((social: any, index: number) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={social.platform}
                  >
                    <span className="text-xs">
                      {social.platform.charAt(0).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {footerData.bottom?.copyright}
          </p>
          {footerData.bottom?.legalLinks && footerData.bottom.legalLinks.length > 0 && (
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerData.bottom.legalLinks.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}`

export default function FooterGlobalPage() {
  const steps = [
    {
      title: 'Install Footer Global',
      keyword: 'Install',
      description: 'Add the footer global to your PayloadCMS project',
      content: (
        <Snippet command="bunx payloadkit@latest add Footer">
          Install the footer global using the PayloadKit CLI. This adds all necessary files and dependencies.
        </Snippet>
      )
    },
    {
      title: 'Configure PayloadCMS',
      keyword: 'Configure',
      description: 'Add the footer global to your Payload configuration',
      content: (
        <CodeBlock
          code={`import { Footer } from './globals/Footer'

export default buildConfig({
  globals: [Footer],
  // ... rest of config
})`}
          language="typescript"
        />
      )
    },
    {
      title: 'Create Footer Component',
      keyword: 'Implement',
      description: 'Create a React component to render your footer',
      content: (
        <CodeBlock
          code={usageCode}
          language="tsx"
        />
      )
    },
    {
      title: 'Configure Footer',
      keyword: 'Setup',
      description: 'Set up your footer in PayloadCMS admin',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Navigate to <code>yourdomain.com/admin/globals/footer</code> to configure:
          </p>
          <ul className="text-sm space-y-2">
            <li>• Set brand information and logo</li>
            <li>• Add footer navigation columns</li>
            <li>• Configure social media links</li>
            <li>• Set copyright and legal links</li>
          </ul>
        </div>
      )
    }
  ]

  const apiProps = [
    {
      name: 'brand',
      type: 'object',
      description: 'Brand information including logo, name, and description',
      required: false
    },
    {
      name: 'columns',
      type: 'array',
      description: 'Array of footer navigation columns with links',
      required: false
    },
    {
      name: 'social',
      type: 'array',
      description: 'Array of social media platform links',
      required: false
    },
    {
      name: 'bottom',
      type: 'object',
      description: 'Bottom section with copyright and legal links',
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
        title="Footer Global"
        description="Configurable footer global with social links, copyright, and multi-column navigation for PayloadCMS applications."
        category="globals"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="15 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Footer Preview"
        description="Interactive demonstration of a configurable footer with brand section, navigation columns, social links, and bottom copyright area"
        variants={[
          {
            name: 'Default',
            description: 'Standard footer layout with brand, navigation, social links, and legal section',
            component: <FooterPreview />
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
        title="Footer Global Fields"
        description="Complete reference for the Footer global configuration"
        props={apiProps}
      />

      {/* Tags */}
      <PageTags
        category="globals"
        dependencies={['payload', 'react']}
        tags={['footer', 'navigation', 'social-links', 'copyright', 'legal', 'site-wide']}
      />
    </div>
  )
}