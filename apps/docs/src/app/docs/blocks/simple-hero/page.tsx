import { Metadata } from 'next'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Simple Hero Block',
  description: 'Clean and minimalist hero section with flexible layouts, perfect for landing pages, portfolios, and content-focused websites. Emphasizes simplicity and readability.',
}

export default function SimpleHeroPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">Simple Hero Block</h1>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
            New
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Clean and minimalist hero section with flexible layouts, perfect for landing pages, portfolios, and content-focused websites. Emphasizes simplicity and readability.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>payloadkit add simple-hero</code>
          </pre>
          <CopyButton text="payloadkit add simple-hero" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 layout options: centered, left-aligned, right-aligned, split with image</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 content width settings: narrow, medium, wide, full</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Rich content support: eyebrow, title, subtitle, description</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Up to 2 call-to-action buttons with 3 styles and 3 sizes</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Image support for split layout with left/right positioning</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 background types: color, gradient, image, none</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>3 text color themes: dark, light, primary</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 title size options: sm, md, lg, xl</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Mobile-responsive design with adaptive typography</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Lightweight implementation without heavy dependencies</span>
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
import { SimpleHero } from './blocks/simple-hero'

export default buildConfig({
  // ... other config
  blocks: [
    SimpleHero,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { SimpleHero } from './blocks/simple-hero'

export default buildConfig({
  // ... other config
  blocks: [
    SimpleHero,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Frontend Component</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/SimpleHero.tsx
import { SimpleHeroComponent } from './blocks/simple-hero'

export function SimpleHero() {
  return (
    <SimpleHeroComponent
      eyebrow="Welcome"
      title="Clean, Simple, Effective"
      subtitle="Beautiful hero sections without the complexity"
      description="Perfect for content-focused websites that prioritize readability and user experience."
      layout="centered"
      contentWidth="medium"
      titleSize="lg"
      background={{
        type: 'gradient',
        gradientFrom: '#f8fafc',
        gradientTo: '#e2e8f0',
        gradientDirection: 'to-br'
      }}
      callToActions={[
        {
          label: 'Get Started',
          url: '/start',
          appearance: 'primary',
          size: 'default'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'default'
        }
      ]}
    />
  )
}`}</code>
            </pre>
            <CopyButton text={`// components/SimpleHero.tsx
import { SimpleHeroComponent } from './blocks/simple-hero'

export function SimpleHero() {
  return (
    <SimpleHeroComponent
      eyebrow="Welcome"
      title="Clean, Simple, Effective"
      subtitle="Beautiful hero sections without the complexity"
      description="Perfect for content-focused websites that prioritize readability and user experience."
      layout="centered"
      contentWidth="medium"
      titleSize="lg"
      background={{
        type: 'gradient',
        gradientFrom: '#f8fafc',
        gradientTo: '#e2e8f0',
        gradientDirection: 'to-br'
      }}
      callToActions={[
        {
          label: 'Get Started',
          url: '/start',
          appearance: 'primary',
          size: 'default'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'default'
        }
      ]}
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
                <td className="border border-border px-4 py-2 font-mono text-sm">layout</td>
                <td className="border border-border px-4 py-2 text-sm">'centered' | 'left' | 'right' | 'split'</td>
                <td className="border border-border px-4 py-2 text-sm">'centered'</td>
                <td className="border border-border px-4 py-2 text-sm">Layout style</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">contentWidth</td>
                <td className="border border-border px-4 py-2 text-sm">'narrow' | 'medium' | 'wide' | 'full'</td>
                <td className="border border-border px-4 py-2 text-sm">'medium'</td>
                <td className="border border-border px-4 py-2 text-sm">Content container width</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">titleSize</td>
                <td className="border border-border px-4 py-2 text-sm">'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="border border-border px-4 py-2 text-sm">'lg'</td>
                <td className="border border-border px-4 py-2 text-sm">Title font size</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">textColor</td>
                <td className="border border-border px-4 py-2 text-sm">'dark' | 'light' | 'primary'</td>
                <td className="border border-border px-4 py-2 text-sm">'dark'</td>
                <td className="border border-border px-4 py-2 text-sm">Text color theme</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">image</td>
                <td className="border border-border px-4 py-2 text-sm">string | { url: string }</td>
                <td className="border border-border px-4 py-2 text-sm">-</td>
                <td className="border border-border px-4 py-2 text-sm">Hero image for split layout</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">imagePosition</td>
                <td className="border border-border px-4 py-2 text-sm">'right' | 'left'</td>
                <td className="border border-border px-4 py-2 text-sm">'right'</td>
                <td className="border border-border px-4 py-2 text-sm">Image position in split layout</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">callToActions</td>
                <td className="border border-border px-4 py-2 text-sm">CallToAction[]</td>
                <td className="border border-border px-4 py-2 text-sm">[]</td>
                <td className="border border-border px-4 py-2 text-sm">Action buttons (max 2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Layout Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Layout Examples</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Centered Layout</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`<SimpleHeroComponent
  title="Welcome to Our Platform"
  layout="centered"
  contentWidth="medium"
  textAlignment="center"
/>`}</code>
            </pre>
            <CopyButton text={`<SimpleHeroComponent
  title="Welcome to Our Platform"
  layout="centered"
  contentWidth="medium"
  textAlignment="center"
/>`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Split Layout with Image</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`<SimpleHeroComponent
  title="Powerful Features"
  subtitle="Everything you need to succeed"
  layout="split"
  image="/hero-image.jpg"
  imagePosition="right"
/>`}</code>
            </pre>
            <CopyButton text={`<SimpleHeroComponent
  title="Powerful Features"
  subtitle="Everything you need to succeed"
  layout="split"
  image="/hero-image.jpg"
  imagePosition="right"
/>`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Left-Aligned Layout</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`<SimpleHeroComponent
  title="Start Your Journey"
  layout="left"
  contentWidth="wide"
  titleSize="xl"
/>`}</code>
            </pre>
            <CopyButton text={`<SimpleHeroComponent
  title="Start Your Journey"
  layout="left"
  contentWidth="wide"
  titleSize="xl"
/>`} />
          </div>
        </div>
      </div>

      {/* Content Width Guide */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Content Width Guide</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Narrow (max-w-2xl)</h3>
            <p className="text-sm text-muted-foreground">Best for short, focused messages and call-to-action focused content.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Medium (max-w-4xl)</h3>
            <p className="text-sm text-muted-foreground">Ideal for most use cases, provides good readability across devices.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Wide (max-w-6xl)</h3>
            <p className="text-sm text-muted-foreground">Great for content-rich heroes with longer descriptions.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Full (max-w-none)</h3>
            <p className="text-sm text-muted-foreground">Uses full container width, perfect for split layouts.</p>
          </div>
        </div>
      </div>

      {/* Button Configuration */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Configuration</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button Appearances</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Primary</h4>
              <p className="text-sm text-muted-foreground">Solid background with primary color</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code>{`appearance: 'primary'`}</code>
                </pre>
                <CopyButton text={`appearance: 'primary'`} />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Secondary</h4>
              <p className="text-sm text-muted-foreground">Solid background with secondary color</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code>{`appearance: 'secondary'`}</code>
                </pre>
                <CopyButton text={`appearance: 'secondary'`} />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Outline</h4>
              <p className="text-sm text-muted-foreground">Transparent background with border</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code>{`appearance: 'outline'`}</code>
                </pre>
                <CopyButton text={`appearance: 'outline'`} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button Sizes</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Small (sm)</h4>
              <p className="text-sm text-muted-foreground">Compact size for secondary actions</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Default</h4>
              <p className="text-sm text-muted-foreground">Standard button size for most use cases</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Large (lg)</h4>
              <p className="text-sm text-muted-foreground">Prominent size for primary actions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Philosophy */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Design Philosophy</h2>
        <div className="space-y-3">
          <div className="p-4 border border-green-200 bg-green-50 rounded-md dark:border-green-800 dark:bg-green-900/20">
            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Content-First Approach</h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Simple Hero prioritizes readability and content hierarchy over visual effects. Perfect for content-focused websites, portfolios, and professional presentations where the message is more important than fancy animations.
            </p>
          </div>

          <div className="p-4 border border-blue-200 bg-blue-50 rounded-md dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Performance Benefits</h3>
            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li>• Lightweight with minimal dependencies</li>
              <li>• Fast loading times with no heavy assets</li>
              <li>• Excellent for SEO and accessibility</li>
              <li>• Mobile-first responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}