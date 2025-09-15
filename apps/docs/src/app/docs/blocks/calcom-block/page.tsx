import { Metadata } from 'next'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Cal.com Block',
  description: 'Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types.',
}

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
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">Cal.com Block</h1>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
            New
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>payloadkit add calcom-block</code>
          </pre>
          <CopyButton text="payloadkit add calcom-block" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Full Cal.com integration with iframe embedding</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Support for specific event types and general booking pages</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>3 calendar themes: auto, light, dark</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>3 layout options: full-width, split-content, split-calendar</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>4 calendar height options: small, medium, large, auto</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Rich header content: eyebrow, title, subtitle, description</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Feature list with 8 Lucide React icons</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Auto-loading of Cal.com embed script</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Responsive design with mobile-first approach</span>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <div className="p-4 border border-blue-200 bg-blue-50 rounded-md dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Cal.com Account Required</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            You'll need a Cal.com account and username. Set up your event types in your Cal.com dashboard before using this component.
          </p>
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
import { CalComBlock } from './blocks/calcom-block'

export default buildConfig({
  // ... other config
  blocks: [
    CalComBlock,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { CalComBlock } from './blocks/calcom-block'

export default buildConfig({
  // ... other config
  blocks: [
    CalComBlock,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Frontend Component</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{codeExample}</code>
            </pre>
            <CopyButton text={codeExample} />
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
                <td className="border border-border px-4 py-2 font-mono text-sm">calcomUsername</td>
                <td className="border border-border px-4 py-2 text-sm">string</td>
                <td className="border border-border px-4 py-2 text-sm">-</td>
                <td className="border border-border px-4 py-2 text-sm">Your Cal.com username (required)</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">eventType</td>
                <td className="border border-border px-4 py-2 text-sm">string</td>
                <td className="border border-border px-4 py-2 text-sm">-</td>
                <td className="border border-border px-4 py-2 text-sm">Specific event type slug (optional)</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">layout</td>
                <td className="border border-border px-4 py-2 text-sm">'full-width' | 'split-content' | 'split-calendar'</td>
                <td className="border border-border px-4 py-2 text-sm">'full-width'</td>
                <td className="border border-border px-4 py-2 text-sm">Block layout style</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">theme</td>
                <td className="border border-border px-4 py-2 text-sm">'auto' | 'light' | 'dark'</td>
                <td className="border border-border px-4 py-2 text-sm">'auto'</td>
                <td className="border border-border px-4 py-2 text-sm">Calendar theme</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">height</td>
                <td className="border border-border px-4 py-2 text-sm">'sm' | 'md' | 'lg' | 'auto'</td>
                <td className="border border-border px-4 py-2 text-sm">'lg'</td>
                <td className="border border-border px-4 py-2 text-sm">Calendar height</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">features</td>
                <td className="border border-border px-4 py-2 text-sm">Feature[]</td>
                <td className="border border-border px-4 py-2 text-sm">[]</td>
                <td className="border border-border px-4 py-2 text-sm">Feature list for split layouts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Available Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Icons</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {['calendar', 'clock', 'message-circle', 'phone', 'target', 'check', 'star', 'shield'].map((icon) => (
            <div key={icon} className="flex flex-col items-center gap-2 p-2 border rounded-md">
              <div className="text-sm font-mono">{icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Guide */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup Guide</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">1. Create Cal.com Account</h3>
            <p className="text-muted-foreground">
              Sign up at <a href="https://cal.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">cal.com</a> and choose your username.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">2. Set Up Event Types</h3>
            <p className="text-muted-foreground">
              Create your event types in the Cal.com dashboard (e.g., "30-minute-consultation", "discovery-call").
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">3. Use in PayloadKit</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
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
    </div>
  )
}