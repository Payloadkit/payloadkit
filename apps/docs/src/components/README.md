# Documentation Components

Interactive components for PayloadKit documentation.

## Components

### PageDescription
Page headers with metadata and features.

```tsx
<PageDescription
  title="Your Page Title"
  description="What this page covers"
  category="blocks"
  difficulty="beginner"
  features={['Feature 1', 'Feature 2']}
/>
```

### Snippet & MultiSnippet
Code snippets with copy functionality.

```tsx
<Snippet command="npm install payloadkit" />

<MultiSnippet commands={[
  { command: 'npm create payloadkit@latest', description: 'Create project' },
  { command: 'cd my-app && npm install', description: 'Install deps' }
]} />
```

### ComponentPreview
Component demos with code tabs.

```tsx
<ComponentPreview
  name="Button Component"
  component={<YourComponent />}
  code={{ component: `...`, config: `...` }}
  dependencies={['@radix-ui/react-button']}
/>
```

### TutorialSteps
Step-by-step guides with progress tracking.

```tsx
<TutorialSteps
  title="Setup Guide"
  steps={[
    { title: 'Step 1', content: <div>Content</div> },
    { title: 'Step 2', content: <div>More content</div> }
  ]}
/>
```

## Usage

Standard page structure:

```tsx
export default function MyDocPage() {
  return (
    <div className="space-y-8">
      <PageDescription title="..." description="..." />
      <ComponentPreview component={<Demo />} />
      <TutorialSteps steps={installSteps} />
    </div>
  )
}
```

## Testing

```bash
bun dev:docs
```