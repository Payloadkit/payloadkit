# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is PayloadKit - an open source framework for PayloadCMS that provides reusable components, blocks, and templates to build PayloadCMS applications faster. It follows the shadcn/ui approach of copying components into projects rather than using npm packages.

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
- `packages/create-payloadkit/` - Project creation CLI
- `apps/docs/` - Next.js documentation website
- `registry/` - Local component registry with blocks and components
- `registry/blocks/` - PayloadCMS blocks (call-to-action, hero-block, etc.)
- `registry/components/` - Reusable React components

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
- `registry/index.json` - Central metadata file
- `registry/blocks/[component-name]/` - Component files and config
- Each component has: Component.tsx, config.ts, index.ts, payloadkit.json

## Key Features

- **Copy-Paste Approach** - Components are copied into projects for full control
- **PayloadCMS Integration** - Built specifically for PayloadCMS 3.0+ blocks and fields
- **TypeScript Throughout** - Complete type safety across all packages
- **Modern CLI Experience** - Beautiful CLI with spinners, colors, and clear feedback
- **Local Registry** - Fast component discovery without network calls
- **Template System** - Project scaffolding with different templates (basic, blog, business)

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

1. **Template Definition**: Add to TEMPLATES object in `create-payloadkit/src/index.ts`
2. **Project Structure**: Define directory structure and files
3. **Dependencies**: Specify required packages and versions
4. **Configuration**: Include necessary config files (payload.config.ts, etc.)
5. **Documentation**: Update CLI documentation with new template

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.