import { Metadata } from 'next'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Feature Steps Block',
  description: 'Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides.',
}

export default function FeatureStepsBlockPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">Feature Steps Block</h1>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
            New
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>payloadkit add feature-steps-block</code>
          </pre>
          <CopyButton text="payloadkit add feature-steps-block" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Two section layouts: stacked or two-column</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Rich header content: eyebrow, title, subtitle, description</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>16 Lucide React icons for steps</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 step layouts: 2-col, 3-col, 4-col grid, vertical list, staggered stair</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Optional step numbering with customizable styling</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>3 card styles: elevated, flat, minimal</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Stair layout with optional images for each step</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Optional advantages section with checkmarks</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Flexible background options: color, gradient, image, none</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Responsive design with mobile-first approach</span>
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
import { FeatureStepsBlock } from './blocks/feature-steps-block'

export default buildConfig({
  // ... other config
  blocks: [
    FeatureStepsBlock,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { FeatureStepsBlock } from './blocks/feature-steps-block'

export default buildConfig({
  // ... other config
  blocks: [
    FeatureStepsBlock,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Frontend Component</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/FeatureSteps.tsx
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
}`}</code>
            </pre>
            <CopyButton text={`// components/FeatureSteps.tsx
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
                <td className="border border-border px-4 py-2 font-mono text-sm">sectionLayout</td>
                <td className="border border-border px-4 py-2 text-sm">'stacked' | 'two-column'</td>
                <td className="border border-border px-4 py-2 text-sm">'stacked'</td>
                <td className="border border-border px-4 py-2 text-sm">Overall section layout</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">stepsLayout</td>
                <td className="border border-border px-4 py-2 text-sm">'grid-2' | 'grid-3' | 'grid-4' | 'vertical' | 'stair'</td>
                <td className="border border-border px-4 py-2 text-sm">'grid-3'</td>
                <td className="border border-border px-4 py-2 text-sm">Layout for steps section</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">cardStyle</td>
                <td className="border border-border px-4 py-2 text-sm">'elevated' | 'flat' | 'minimal'</td>
                <td className="border border-border px-4 py-2 text-sm">'elevated'</td>
                <td className="border border-border px-4 py-2 text-sm">Visual style for step cards</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">showStepNumbers</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Show numbered step indicators</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">steps</td>
                <td className="border border-border px-4 py-2 text-sm">Step[]</td>
                <td className="border border-border px-4 py-2 text-sm">[]</td>
                <td className="border border-border px-4 py-2 text-sm">Array of step objects</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">showAdvantages</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Show advantages section</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Available Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Icons</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {['target', 'message-circle', 'trending-up', 'book-open', 'lightbulb', 'zap', 'search', 'star', 'rocket', 'graduation-cap', 'settings', 'bar-chart', 'shield', 'heart', 'trophy', 'palette'].map((icon) => (
            <div key={icon} className="flex flex-col items-center gap-2 p-2 border rounded-md">
              <div className="text-sm font-mono">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}