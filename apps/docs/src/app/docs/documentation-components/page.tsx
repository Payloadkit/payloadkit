import { Metadata } from 'next'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview, SimplePreview } from '@/components/component-preview'
import { Snippet, MultiSnippet } from '@/components/snippet'
import { TutorialSteps, Step, StepList } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Documentation Components - PayloadKit',
  description: 'Interactive components for creating better documentation experiences with previews, code snippets, and step-by-step tutorials.',
}

export default function DocumentationComponentsPage() {
  return (
    <div className="space-y-8">
      <PageDescription
        title="Documentation Components"
        description="A comprehensive set of interactive components designed to create engaging and user-friendly documentation experiences. These components provide code previews, interactive examples, step-by-step tutorials, and enhanced code snippets."
        category="components"
        version="1.0.0"
        difficulty="intermediate"
        estimatedTime="15 minutes"
        features={[
          'Interactive component previews',
          'One-click code copying',
          'Step-by-step tutorials',
          'Responsive design controls',
          'Syntax highlighting',
          'Package manager detection',
          'Progress tracking',
          'Accessibility focused'
        ]}
        tags={[
          'Documentation',
          'Components',
          'UI/UX',
          'Developer Experience',
          'Interactive',
          'Accessibility'
        ]}
      />

      {/* PageDescription Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          PageDescription
        </h2>
        <p className="text-muted-foreground">
          Provides consistent page headers with context, metadata, and feature lists.
        </p>

        <CodeBlock
          code={`import { PageDescription } from '@/components/page-description'

<PageDescription
  title="Your Page Title"
  description="Detailed description of what this page covers."
  category="blocks" // blocks | components | globals | examples | guides
  version="1.0.0"
  difficulty="beginner" // beginner | intermediate | advanced
  estimatedTime="10 minutes"
  lastUpdated="December 2024"
  features={[
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ]}
  tags={['Tag1', 'Tag2', 'Tag3']}
/>`}
          language="tsx"
          title="PageDescription Usage"
        />
      </div>

      {/* Snippet Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Snippet
        </h2>
        <p className="text-muted-foreground">
          Enhanced code snippets with one-click copying for CLI commands and code examples.
        </p>

        <SimplePreview
          title="Basic Snippet"
          component={
            <Snippet
              command="npm install @payloadkit/core"
              title="Install PayloadKit"
            >
              Install the core PayloadKit package to get started.
            </Snippet>
          }
          code={`<Snippet
  command="npm install @payloadkit/core"
  title="Install PayloadKit"
>
  Install the core PayloadKit package to get started.
</Snippet>`}
        />

        <SimplePreview
          title="Multi-Step Commands"
          component={
            <MultiSnippet
              title="Setup Process"
              commands={[
                {
                  command: 'npm create payloadkit@latest my-app',
                  description: 'Create a new PayloadKit project'
                },
                {
                  command: 'cd my-app && npm install',
                  description: 'Navigate and install dependencies'
                },
                {
                  command: 'npm run dev',
                  description: 'Start the development server'
                }
              ]}
            />
          }
          code={`<MultiSnippet
  title="Setup Process"
  commands={[
    {
      command: 'npm create payloadkit@latest my-app',
      description: 'Create a new PayloadKit project'
    },
    {
      command: 'cd my-app && npm install',
      description: 'Navigate and install dependencies'
    }
  ]}
/>`}
        />
      </div>

      {/* TutorialSteps Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          TutorialSteps
        </h2>
        <p className="text-muted-foreground">
          Interactive step-by-step tutorials with progress tracking and navigation.
        </p>

        <SimplePreview
          title="Simple Step List"
          component={
            <StepList
              steps={[
                {
                  title: 'Install Dependencies',
                  content: (
                    <div className="space-y-2">
                      <p>First, install the required packages:</p>
                      <code className="bg-muted px-2 py-1 rounded">npm install payloadkit</code>
                    </div>
                  )
                },
                {
                  title: 'Configure Project',
                  content: (
                    <p>Add the configuration to your project settings.</p>
                  )
                },
                {
                  title: 'Start Building',
                  content: (
                    <p>You're ready to start using PayloadKit components!</p>
                  )
                }
              ]}
            />
          }
          code={`<StepList
  steps={[
    {
      title: 'Install Dependencies',
      content: (
        <div>
          <p>First, install the required packages:</p>
          <code>npm install payloadkit</code>
        </div>
      )
    },
    {
      title: 'Configure Project',
      content: <p>Add the configuration to your project settings.</p>
    }
  ]}
/>`}
        />

        <CodeBlock
          code={`// For complex interactive tutorials
const steps = [
  {
    title: 'Step 1: Installation',
    description: 'Install the required packages',
    content: <YourStepContent />,
    optional: false
  },
  {
    title: 'Step 2: Configuration',
    description: 'Set up your configuration',
    content: <YourConfigContent />,
    optional: true // This step can be skipped
  }
]

<TutorialSteps
  title="Complete Setup Guide"
  steps={steps}
  allowSkip={true}
/>`}
          language="tsx"
          title="Interactive Tutorial"
        />
      </div>

      {/* ComponentPreview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          ComponentPreview
        </h2>
        <p className="text-muted-foreground">
          Comprehensive component previews with multiple code tabs and responsive controls.
        </p>

        <CodeBlock
          code={`<ComponentPreview
  name="Button Component"
  description="Interactive button with multiple variants"
  component={<YourComponent />}
  code={{
    component: \`// React component code\`,
    config: \`// PayloadCMS config\`,
    usage: \`// Usage examples\`
  }}
  dependencies={[
    '@radix-ui/react-button',
    'lucide-react'
  ]}
  features={[
    'Multiple variants',
    'Icon support',
    'Accessible'
  ]}
  responsive={true}
  interactive={true}
/>`}
          language="tsx"
          title="ComponentPreview Usage"
        />
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Best Practices
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-green-600">✅ Do</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">1</Badge>
                <span>Use PageDescription at the top of every documentation page</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">2</Badge>
                <span>Provide context with descriptions for all code snippets</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">3</Badge>
                <span>Use TutorialSteps for multi-step processes</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">4</Badge>
                <span>Include interactive previews for UI components</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-red-600">❌ Don't</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">1</Badge>
                <span>Use plain <code>{`<pre>`}</code> tags for code examples</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">2</Badge>
                <span>Forget to provide copy functionality for commands</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">3</Badge>
                <span>Make tutorials too long without progress indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-1">4</Badge>
                <span>Skip responsive testing for component previews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Component Index */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
          Component Index
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'PageDescription', use: 'Page headers with context' },
            { name: 'Snippet', use: 'CLI commands with copy' },
            { name: 'MultiSnippet', use: 'Multiple related commands' },
            { name: 'TutorialSteps', use: 'Interactive tutorials' },
            { name: 'StepList', use: 'Simple step display' },
            { name: 'ComponentPreview', use: 'Full component demos' },
            { name: 'SimplePreview', use: 'Quick component examples' },
            { name: 'CodeBlock', use: 'Syntax highlighted code' },
            { name: 'Step', use: 'Individual step component' }
          ].map((component) => (
            <div key={component.name} className="p-4 border rounded-lg">
              <h4 className="font-semibold">{component.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{component.use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}