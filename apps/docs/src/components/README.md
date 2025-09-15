# Documentation Components

A comprehensive set of interactive components designed to create engaging and user-friendly documentation experiences for PayloadKit.

## Overview

These components provide:
- 🎯 **Interactive previews** with code examples
- 📋 **One-click code copying** for CLI commands
- 📚 **Step-by-step tutorials** with progress tracking
- 🎨 **Consistent page headers** with context
- 📱 **Responsive controls** for component testing
- ♿ **Accessibility-focused** design

## Components

### 1. PageDescription
Provides consistent page headers with context, metadata, and feature lists.

```tsx
import { PageDescription } from '@/components/page-description'

<PageDescription
  title="Your Page Title"
  description="Detailed description of what this page covers."
  category="blocks" // blocks | components | globals | examples | guides
  version="1.0.0"
  difficulty="beginner" // beginner | intermediate | advanced
  estimatedTime="10 minutes"
  features={['Feature 1', 'Feature 2']}
  tags={['Tag1', 'Tag2']}
/>
```

### 2. Snippet & MultiSnippet
Enhanced code snippets with one-click copying for CLI commands.

```tsx
import { Snippet, MultiSnippet } from '@/components/snippet'

// Single command
<Snippet
  command="npm install payloadkit"
  title="Install PayloadKit"
>
  Install the core PayloadKit package.
</Snippet>

// Multiple commands
<MultiSnippet
  commands={[
    { command: 'npm create payloadkit@latest', description: 'Create project' },
    { command: 'cd my-app && npm install', description: 'Install deps' }
  ]}
/>
```

### 3. TutorialSteps & StepList
Interactive step-by-step tutorials with navigation and progress tracking.

```tsx
import { TutorialSteps, StepList } from '@/components/tutorial-steps'

// Simple step display
<StepList
  steps={[
    { title: 'Step 1', content: <div>Content here</div> },
    { title: 'Step 2', content: <div>More content</div> }
  ]}
/>

// Interactive tutorial
<TutorialSteps
  title="Setup Guide"
  steps={steps}
  allowSkip={true}
/>
```

### 4. ComponentPreview
Comprehensive component previews with multiple code tabs and responsive controls.

```tsx
import { ComponentPreview } from '@/components/component-preview'

<ComponentPreview
  name="Button Component"
  description="Interactive button demo"
  component={<YourComponent />}
  code={{
    component: `// React component code`,
    config: `// PayloadCMS config`,
    usage: `// Usage examples`
  }}
  dependencies={['@radix-ui/react-button']}
  responsive={true}
  interactive={true}
/>
```

### 5. CodeBlock
Enhanced code blocks with syntax highlighting and copy functionality.

```tsx
import { CodeBlock } from '@/components/code-tabs'

<CodeBlock
  code={`const example = 'Hello World'`}
  language="typescript"
  title="Example Code"
/>
```

## Usage Patterns

### Documentation Page Structure

```tsx
import {
  PageDescription,
  ComponentPreview,
  TutorialSteps,
  Snippet
} from '@/components'

export default function MyDocPage() {
  return (
    <div className="space-y-8">
      {/* Always start with PageDescription */}
      <PageDescription
        title="Page Title"
        description="What this page covers"
        category="blocks"
        difficulty="beginner"
        features={['Feature list']}
      />

      {/* Component preview for UI components */}
      <ComponentPreview
        name="Component Name"
        component={<Demo />}
        code={{ component: '...' }}
      />

      {/* Installation/setup instructions */}
      <TutorialSteps
        title="Installation"
        steps={installSteps}
      />
    </div>
  )
}
```

### Command Documentation

```tsx
// For CLI commands
<Snippet command="payloadkit add button" />

// For multi-step setup
<MultiSnippet
  title="Complete Setup"
  commands={[
    { command: 'step 1', description: 'What this does' },
    { command: 'step 2', description: 'Next step' }
  ]}
/>
```

### Tutorial Creation

```tsx
const steps = [
  {
    title: 'Install Dependencies',
    description: 'Install required packages',
    content: <Snippet command="npm install ..." />,
    optional: false
  },
  {
    title: 'Configure (Optional)',
    description: 'Optional configuration',
    content: <div>Configuration content</div>,
    optional: true
  }
]

<TutorialSteps
  title="Setup Guide"
  steps={steps}
  allowSkip={true}
/>
```

## Styling & Theming

All components use:
- **shadcn/ui** design tokens
- **Tailwind CSS** utilities
- **CSS variables** for theming
- **Responsive design** principles
- **Accessibility standards** (WCAG 2.1 AA)

## Best Practices

### ✅ Do
- Use PageDescription at the top of every documentation page
- Provide context descriptions for all code snippets
- Use TutorialSteps for multi-step processes (3+ steps)
- Include interactive previews for UI components
- Test responsive behavior with preview controls

### ❌ Don't
- Use plain `<pre>` tags for code examples
- Forget copy functionality for CLI commands
- Make tutorials too long without progress indicators
- Skip responsive testing for component previews
- Mix different component patterns inconsistently

## Accessibility Features

- ✅ **Keyboard navigation** support
- ✅ **Screen reader** compatibility
- ✅ **Focus management** in interactive components
- ✅ **ARIA labels** and descriptions
- ✅ **Color contrast** compliance
- ✅ **Motion preferences** respect

## Development

### Adding New Components

1. Create component in appropriate directory
2. Export from `components/index.ts`
3. Add to component documentation page
4. Test accessibility and responsiveness
5. Update this README

### Testing Components

```bash
# Run development server
bun dev:docs

# Test specific component pages
curl -I http://localhost:3333/docs/documentation-components
```

## Examples

See the following example pages:
- `/docs/blocks/faq-block-new` - ComponentPreview usage
- `/docs/installation-new` - TutorialSteps and Snippet usage
- `/docs/documentation-components` - All components showcase

## Contributing

When creating documentation:
1. Always start with PageDescription
2. Use appropriate components for content type
3. Test on multiple screen sizes
4. Verify accessibility with keyboard navigation
5. Ensure copy functionality works for all code examples