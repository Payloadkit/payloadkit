# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is PayloadKit - an open source framework for PayloadCMS that provides reusable components, blocks, plugins, and templates to build PayloadCMS applications faster. It follows the shadcn/ui approach of copying components into projects rather than using npm packages.

## Development Commands

**Primary development workflow:**
- `bun dev` - Start all package development servers in parallel
- `bun build` - Build all packages
- `bun dev:docs` - Start documentation site on localhost:3333
- `bun build:docs` - Build documentation site

**Package-specific commands:**
- `bun run --filter=payloadkit dev` - PayloadKit CLI development
- `bun run --filter=create-payloadkit dev` - create-payloadkit CLI development
- `bun run --filter=docs dev` - Documentation site development

**Testing and quality:**
- `bun test` - Run tests across all packages
- `bun lint` - Run ESLint across all packages
- `bun typecheck` - Run TypeScript checks across all packages

**CLI tools:**
- `node packages/payloadkit/bin/index.js` - Run PayloadKit CLI locally
- `node packages/create-payloadkit/bin/index.js` - Run create-payloadkit CLI locally

## Architecture

### Core Stack
- **Monorepo:** bun workspaces with packages and apps
- **CLI Tools:** Commander.js with TypeScript
- **Build System:** tsup for fast TypeScript compilation
- **Documentation:** Next.js 15 with TailwindCSS and shadcn/ui
- **Registry:** Local file-based component registry
- **Package Manager:** bun for fast dependency management

### Directory Structure

**Key directories:**
- `packages/core/` - Core types and utilities shared across packages
- `packages/payloadkit/` - Main PayloadKit CLI tool
- `packages/create-payloadkit/` - Project creation CLI with template system
- `packages/create-payloadkit/templates/` - Ready-to-use project templates
- `apps/docs/` - Next.js documentation website
- `registry/` - Local component registry with blocks and components
- `registry/blocks/` - PayloadCMS blocks (call-to-action, hero-block, etc.) with shadcn/ui
- `registry/components/` - Reusable React components (RichText, CMSLink, etc.)
- `registry/collections/` - Reusable PayloadCMS collections (Users, Media, Pages, etc.)
- `registry/globals/` - Reusable PayloadCMS globals
- `registry/plugins/` - Reusable PayloadCMS plugins following the official architecture
- `registry/fields/` - Reusable PayloadCMS fields types
- `registry/access/` - Reusable PayloadCMS Access Control used to defined what a user can and cannot do
- `registry/utils/` - Reusable Helper functions and utilities for PayloadCMS
- `registry/config/` - Modularized PayloadCMS configuration
- `registry/pages/` - Reusable Next.js pages in context of PayloadCMS
- `registry/middlewares/` - Reusable Next.js middlewares in context of PayloadCMS


**Configuration files:**
- `package.json` - Root workspace configuration with bun workspaces
- `packages/*/package.json` - Individual package configurations
- `registry/index.json` - Component registry metadata
- `tsconfig.json` - Root TypeScript configuration

### Package Architecture

**@payloadkit/core:**
- Core TypeScript interfaces and types
- Shared utilities and constants
- Registry and component type definitions

**payloadkit (CLI):**
- Main CLI commands: init, list, add
- Registry loading and component copying
- Project detection and configuration
- File operations and utilities

**create-payloadkit:**
- Project scaffolding and creation
- Template processing and setup
- Dependency installation and git initialization

**docs (Next.js app):**
- Modern documentation site with shadcn/ui design
- Component previews and interactive examples
- Installation guides and CLI documentation

### Registry System

The registry is a local file-based system for component discovery:
- `registry/index.json` - Central metadata file with all registry items
- `registry/blocks/[component-name]/` - PayloadCMS blocks with shadcn/ui integration
- `registry/collections/[collection-name]/` - PayloadCMS collections (Users, Media, Pages)
- `registry/components/[component-name]/` - React components (RichText, CMSLink)
- `registry/globals/[global-name]/` - PayloadCMS global configurations
- Each item has: main files + payloadkit.json metadata + optional __tests__/

### Template System

Templates provide ready-to-use PayloadCMS projects with different use cases:
- `packages/create-payloadkit/templates/[template-name]/` - Complete project templates
- `templates/[name]/template.json` - Template metadata and dependencies
- Templates import components from registry for maximum reusability
- Support inheritance system (specialized templates extend base templates)

## Key Features

- **Copy-Paste Approach** - Components are copied into projects for full control
- **PayloadCMS Integration** - Built specifically for PayloadCMS 3.0+ blocks and fields  
- **shadcn/ui Enhanced** - All blocks use shadcn/ui components for better UX
- **TypeScript Throughout** - Complete type safety across all packages
- **Modern CLI Experience** - Beautiful CLI with spinners, colors, and clear feedback
- **Local Registry** - Fast component discovery without network calls
- **Template System** - Ready-to-production project templates with specialized use cases
- **IKEA Philosophy** - Templates are minimal shells, Registry contains reusable intelligence

## Template Development

### Available Templates

1. **Blank Template** - Minimal foundation (ready ✅)
   - PayloadCMS with PostgreSQL
   - Collections: Users, Media, Pages  
   - shadcn/ui pre-configured
   - Next.js App Router
   - TypeScript + Tailwind CSS

2. **Blog Template** - Blog-focused setup (coming soon)
3. **Business Template** - Marketing website (coming soon)  
4. **E-commerce Template** - Online store (coming soon)

### Creating New Templates

```bash
# Create project from template
npx create-payloadkit my-project --template blank

# Available options
npx create-payloadkit my-project \
  --template blank \
  --package-manager bun \
  --no-install \
  --no-git
```

## Component Development

When adding a new component to the registry:

1. **Create Component Directory**: `registry/blocks/[component-name]/`
2. **Add Required Files**:
   - `Component.tsx` - React component for frontend rendering
   - `config.ts` - PayloadCMS block configuration
   - `index.ts` - Main exports
   - `payloadkit.json` - Component metadata
3. **Update Registry**: Add component entry to `registry/index.json`
4. **Document Component**: Add documentation page to `apps/docs/src/app/docs/components/`

## CLI Development

When modifying CLI behavior:

1. **Development**: Use `node packages/payloadkit/bin/index.js [command]` for testing
2. **Build**: Run `bun build` to compile TypeScript to JavaScript
3. **Test**: Test CLI commands in a temporary directory
4. **Types**: Ensure all TypeScript interfaces are updated in `@payloadkit/core`

## Documentation Development

The documentation site uses:
- **Next.js 15** with App Router
- **TailwindCSS** with custom design system
- **shadcn/ui** components (Button, Badge, etc.)
- **Dark/Light themes** with next-themes
- **Responsive design** with mobile-first approach

To add new documentation:
1. Create pages in `apps/docs/src/app/docs/`
2. Update sidebar navigation in `src/components/sidebar.tsx`
3. Follow existing page structure and styling patterns

## Environment Requirements

- **Node.js:** ^18.20.2 || >=20.9.0
- **Package manager:** bun ^1.0.0 (required)
- **PayloadCMS:** 3.0+ (for generated components)
- **PostgreSQL:** For PayloadCMS projects

## Path Aliases

- `@payloadkit/core` - Core package types and utilities
- `@/` - Maps to `src/` in documentation site

## Important Notes

- Always use `bun` instead of npm for package management
- Build packages before testing CLI tools locally
- Use absolute paths for file operations in CLI tools
- Follow existing component patterns when adding to registry
- Document all new components with examples and previews
- Test CLI commands in isolated directories
- Never commit sensitive data or credentials
- Use PayloadCMS LocalApi when you need to manipulate Database content
- Always follow the PayloadCMS best practices

## Creating New Blocks

When creating a new PayloadCMS block:

1. **Component Structure**: Follow existing patterns in `registry/blocks/`
2. **PayloadCMS Config**: Use proper field types and validation
3. **React Component**: Make responsive and accessible
4. **Dependencies**: List required components and packages
5. **Documentation**: Create detailed component page with preview
6. **Registry Update**: Add to `registry/index.json` with proper metadata

## Creating New Templates

When adding project templates to create-payloadkit:

1. **Create Template Directory**: `packages/create-payloadkit/templates/[template-name]/`
2. **Add template.json**: Metadata file with dependencies and features
3. **Import from Registry**: Use collections, components, blocks from registry
4. **Template Definition**: Add to TEMPLATES object in `create-payloadkit/src/index.ts`
5. **Test Generation**: Run `node packages/create-payloadkit/bin/index.js test-project --template [name]`

### Example template.json Structure

```json
{
  "name": "blog",
  "version": "0.1.0", 
  "description": "Blog template with posts and categories",
  "extends": "blank",
  "payloadkitVersion": "0.1.0",
  "collections": ["Users", "Media", "Pages", "Posts", "Categories"],
  "blocks": ["hero-block", "content", "faq"],
  "components": ["RichText", "CMSLink"],
  "registryDependencies": {
    "collections/Posts": "0.0.1",
    "blocks/hero-block": "0.0.2"
  },
  "features": ["Blog posts", "Categories", "SEO", "Author system"],
  "requiredEnvVars": ["PAYLOAD_SECRET", "DATABASE_URI"]
}
```

## Template Architecture Rules

**IMPORTANT: Templates must follow this exact structure:**

```
templates/[template-name]/
├── src/
│   ├── collections/           # ✅ Dossier parent OBLIGATOIRE
│   │   ├── Users/
│   │   │   ├── index.ts
│   │   │   └── config.ts
│   │   └── [CollectionName]/
│   │       ├── index.ts
│   │       └── config.ts
│   ├── blocks/               # ✅ Dossier parent OBLIGATOIRE  
│   │   ├── hero-block/
│   │   │   ├── Component.tsx
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── [block-name]/
│   ├── components/           # ✅ Dossier parent OBLIGATOIRE
│   │   ├── ui/               # shadcn/ui components
│   │   └── [ComponentName]/
│   │       └── index.tsx
│   ├── globals/              # ✅ Dossier parent OBLIGATOIRE
│   │   ├── Header/
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── [GlobalName]/
│   └── payload.config.ts
├── template.json             # Template metadata
└── package.json
```

**Template Inheritance:**
- All templates extend from `blank` template (base)
- Specialized templates (blog, business) inherit structure and add specific collections/blocks
- Structure must match registry organization for seamless copying

## PayloadKit Philosophy: "IKEA for Web Development"

**CRITICAL PRINCIPLE: Templates are minimal shells, Registry contains the intelligence**

PayloadKit follows the IKEA model:
1. **Templates** = Basic furniture frame (minimal, reusable structure)
2. **Registry** = Components/parts library (blocks, collections, globals, utilities)
3. **Assembly** = Combining template + registry components for specific needs

**Template Minimalism Rules:**
- Templates contain ONLY the essential structure and configuration
- All business logic, components, and features live in the Registry
- Maximum code reusability across different templates
- "Build once, reuse everywhere" philosophy

**Example:**
- ❌ Template contains custom User collection with specific fields
- ✅ Template imports Users collection from `registry/collections/Users/`
- ❌ Template has inline hero component code  
- ✅ Template imports hero-block from `registry/blocks/hero-block/`

**Benefits:**
- Updates to registry components benefit ALL templates automatically
- New templates can be created by mixing/matching existing registry parts
- Bug fixes and improvements centralized in registry
- Community can contribute to registry independently of templates

## Registry Testing Requirements

**MANDATORY: All registry components must have unit tests with Vitest**

Every element in the registry must include comprehensive tests:

**Test Structure:**
```
registry/[type]/[component-name]/
├── Component.tsx
├── config.ts
├── index.ts
├── payloadkit.json
└── __tests__/
    ├── Component.test.tsx      # React component tests
    ├── config.test.ts          # PayloadCMS config tests
    └── integration.test.ts     # End-to-end scenarios
```

**Required Test Coverage:**
- **Blocks**: Component rendering, props validation, responsive behavior, accessibility
- **Collections**: Field validation, hooks execution, access control
- **Globals**: Configuration loading, default values, updates
- **Components**: UI interactions, edge cases, error states
- **Utilities**: Input/output validation, error handling, performance

**Test Framework:**
- **Vitest** for unit and integration tests
- **@testing-library/react** for React component testing
- **@testing-library/jest-dom** for DOM assertions

**Quality Gates:**
- All tests must pass before registry inclusion
- Minimum 80% code coverage required
- Tests must cover most common usage scenarios
- Edge cases and error conditions must be tested


# Better Auth UI
In order to implement a proper better auth page please use Better Auth UI : https://better-auth-ui.com/llms.txt


# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.