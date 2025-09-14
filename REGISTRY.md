# PayloadKit Registry & Template System

This document explains how the PayloadKit registry and template system works.

## 🎯 IKEA Philosophy

PayloadKit follows an "IKEA for Web Development" approach:

1. **Templates** = Basic furniture frame (minimal, reusable structure)
2. **Registry** = Components/parts library (blocks, collections, globals, utilities)  
3. **Assembly** = Combining template + registry components for specific needs

## 📦 Registry Structure

The registry contains reusable PayloadCMS components organized by type:

```
registry/
├── index.json                 # Central metadata file
├── blocks/                    # PayloadCMS blocks with shadcn/ui
│   ├── hero-block/
│   │   ├── Component.tsx      # React component
│   │   ├── config.ts         # PayloadCMS block config
│   │   ├── index.ts          # Main export
│   │   ├── payloadkit.json   # Metadata
│   │   └── __tests__/        # Unit tests (required)
│   └── call-to-action/
├── collections/               # PayloadCMS collections
│   ├── Users/
│   │   ├── config.ts         # Collection configuration
│   │   ├── index.ts          # Main export
│   │   ├── payloadkit.json   # Metadata
│   │   └── __tests__/        # Unit tests (required)
│   ├── Media/
│   └── Pages/
├── components/                # React components
│   ├── RichText/
│   │   ├── index.tsx         # Component implementation
│   │   ├── payloadkit.json   # Metadata
│   │   └── __tests__/        # Unit tests (required)
│   └── CMSLink/
├── globals/                   # PayloadCMS globals (future)
├── plugins/                   # PayloadCMS plugins (future)
├── fields/                    # Custom field types (future)
├── access/                    # Access control (future)
└── utils/                     # Helper utilities (future)
```

## 📄 Registry Metadata (payloadkit.json)

Each registry item must have a `payloadkit.json` file:

```json
{
  "name": "hero-block",
  "description": "A flexible hero section with title, subtitle, and CTA buttons",
  "category": "hero",
  "tags": ["hero", "banner", "landing", "cta"],
  "version": "0.0.2",
  "files": [
    "Component.tsx",
    "config.ts", 
    "index.ts"
  ],
  "dependencies": ["react"],
  "peerDependencies": ["payload"],
  "registryDependencies": ["button", "badge"]
}
```

### Field Descriptions

- `name`: Component name (must match directory name)
- `description`: Brief description of functionality
- `category`: Component category for organization
- `tags`: Array of searchable tags
- `version`: Semantic version
- `files`: List of files included in component
- `dependencies`: npm/bun dependencies required
- `peerDependencies`: Expected peer dependencies
- `registryDependencies`: Other registry components this depends on

## 🏗️ Template System

Templates are complete PayloadCMS projects that import components from the registry.

### Template Structure

```
packages/create-payloadkit/templates/
├── blank/                     # Base template
│   ├── src/
│   │   ├── collections/       # Collections from registry
│   │   ├── components/        # Components from registry
│   │   ├── blocks/           # Blocks from registry (when added)
│   │   ├── app/              # Next.js App Router
│   │   └── payload.config.ts # PayloadCMS config (imports registry)
│   ├── template.json         # Template metadata
│   ├── package.json          # Dependencies
│   ├── components.json       # shadcn/ui config
│   └── tailwind.config.js    # Tailwind config
├── blog/                     # Blog template (extends blank)
├── business/                 # Business template (extends blank)
└── ecommerce/               # E-commerce template (extends blank)
```

### Template Metadata (template.json)

```json
{
  "name": "blank",
  "version": "0.1.0",
  "description": "PayloadKit minimal foundation with essential collections",
  "extends": null,
  "payloadkitVersion": "0.1.0",
  "payloadVersion": "^3.55.1",
  "nextVersion": "^15.0.0",
  "collections": ["Users", "Media", "Pages"],
  "globals": [],
  "blocks": [],
  "components": ["RichText", "CMSLink"],
  "registryDependencies": {
    "collections/Users": "0.0.1",
    "collections/Media": "0.0.1",
    "collections/Pages": "0.0.1",
    "components/RichText": "0.0.1",
    "components/CMSLink": "0.0.1"
  },
  "features": [
    "PostgreSQL database adapter",
    "Lexical rich text editor", 
    "Tailwind CSS with shadcn/ui",
    "TypeScript configuration",
    "Next.js App Router"
  ],
  "requiredEnvVars": [
    "PAYLOAD_SECRET",
    "DATABASE_URI", 
    "NEXT_PUBLIC_SERVER_URL"
  ]
}
```

## 🔄 Template Inheritance

Templates can extend other templates:

```json
{
  "name": "blog",
  "extends": "blank",
  "collections": ["Users", "Media", "Pages", "Posts", "Categories"],
  "blocks": ["hero-block", "content", "faq"]
}
```

When `blog` template is generated:
1. Copy `blank` template as base
2. Add additional collections from registry
3. Add additional blocks from registry
4. Merge dependencies and configurations

## 🧪 Testing Requirements

**All registry components must have unit tests:**

```
registry/[type]/[component-name]/
└── __tests__/
    ├── Component.test.tsx      # React component tests
    ├── config.test.ts          # PayloadCMS config tests
    └── integration.test.ts     # End-to-end scenarios
```

**Testing Requirements:**
- **Framework**: Vitest + @testing-library/react
- **Coverage**: Minimum 80% code coverage
- **Scenarios**: Common usage + edge cases + error conditions
- **Quality Gate**: All tests must pass before registry inclusion

## 🚀 Adding Registry Components

### 1. Create Component Structure

```bash
mkdir -p registry/blocks/my-block
cd registry/blocks/my-block
```

### 2. Implement Component Files

```typescript
// Component.tsx
export const MyBlock = ({ title, description }) => {
  return (
    <section className="py-16">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

// config.ts  
export const MyBlockConfig = {
  slug: 'myBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' }
  ]
}

// index.ts
export { MyBlock } from './Component'
export { MyBlockConfig } from './config'
```

### 3. Add Metadata

```json
// payloadkit.json
{
  "name": "my-block",
  "description": "My custom block component",
  "category": "content",
  "tags": ["block", "content"],
  "version": "0.0.1",
  "files": ["Component.tsx", "config.ts", "index.ts"],
  "dependencies": ["react"],
  "peerDependencies": ["payload"]
}
```

### 4. Write Tests

```typescript  
// __tests__/Component.test.tsx
import { render, screen } from '@testing-library/react'
import { MyBlock } from '../Component'

test('renders title and description', () => {
  render(<MyBlock title="Test" description="Test description" />)
  expect(screen.getByText('Test')).toBeInTheDocument()
  expect(screen.getByText('Test description')).toBeInTheDocument()
})
```

### 5. Update Registry Index

```json
// registry/index.json
{
  "blocks": {
    "my-block": {
      "name": "my-block", 
      "description": "My custom block component",
      "category": "content",
      // ... rest of metadata
    }
  }
}
```

## 🏗️ Creating Templates

### 1. Create Template Directory

```bash
mkdir -p packages/create-payloadkit/templates/my-template
```

### 2. Build Template Structure

Copy from `blank` template and modify:
- Add/remove collections from registry
- Add/remove components from registry  
- Add/remove blocks from registry
- Update `payload.config.ts` imports
- Update `package.json` dependencies

### 3. Create Template Metadata

```json
// template.json
{
  "name": "my-template",
  "description": "My custom template",
  "extends": "blank",
  "collections": ["Users", "Media", "Pages", "Posts"],
  "blocks": ["hero-block", "content"],
  "features": ["Blog posts", "SEO optimization"]
}
```

### 4. Update CLI

```typescript
// packages/create-payloadkit/src/index.ts
const TEMPLATES = {
  blank: { /* ... */ },
  "my-template": {
    name: 'My Template',
    description: 'My custom template description',
    features: ['Feature 1', 'Feature 2']
  }
}
```

### 5. Test Template

```bash
# Build CLI
bun run --filter=create-payloadkit build

# Test generation
node packages/create-payloadkit/bin/index.js test-project --template my-template --no-install
```

## 🎯 Best Practices

### Registry Components

1. **Single Responsibility**: Each component should do one thing well
2. **Reusability**: Design for use across different templates
3. **Documentation**: Include clear descriptions and usage examples
4. **Testing**: Comprehensive test coverage for all scenarios
5. **Versioning**: Use semantic versioning for updates

### Templates

1. **Minimalism**: Import from registry, don't duplicate code
2. **Specialization**: Focus on specific use cases
3. **Documentation**: Clear feature descriptions
4. **Testing**: Test template generation and basic functionality
5. **Dependencies**: Only include necessary packages

### File Organization

1. **Consistent Structure**: Follow established patterns
2. **Clear Naming**: Descriptive file and directory names
3. **Metadata**: Always include payloadkit.json
4. **Comments**: Add "DO NOT MODIFY" headers for registry imports
5. **Git**: Add registry files to .gitignore in generated projects

## 🔄 Update Strategy

### Registry Updates

When updating registry components:
1. Update version in `payloadkit.json`
2. Run tests to ensure compatibility
3. Update `registry/index.json`
4. Test in template generation

### Template Updates  

When updating templates:
1. Update version in `template.json`
2. Update registry dependencies if needed
3. Test generation and basic functionality
4. Update documentation

### Project Updates (Future)

For generated projects:
```bash
# Update registry components
payloadkit update

# Update specific components
payloadkit update hero-block call-to-action

# Update template base
payloadkit update --template
```

This system ensures maximum reusability while maintaining clean separation between templates (structure) and registry (intelligence).