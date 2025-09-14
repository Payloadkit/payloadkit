# 📋 PayloadKit Changelog

All notable changes to PayloadKit are documented in this section.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## 🚀 Recent (Unreleased)

### ✨ New Features

#### 📖 Documentation Site
- **Complete Site**: Next.js documentation site with modern navigation
- **Functional Search**: Search with Ctrl+K shortcut and keyboard navigation
- **Accessibility**: Full WCAG compliance with screen reader support
- **Responsive Design**: Mobile/desktop adaptive interface

#### 🐳 Docker & Deployment
- **Docker Environment**: Complete configuration with PostgreSQL, Redis, and MailHog
- **VPS Deployment**: Optimized Dockerfile for Dokploy production deployment
- **DATABASE_BUILD_URI**: Support for build-time database connections

#### ⚙️ Modular Configuration
- **Smart Detection**: Automatic PostgreSQL/MongoDB detection
- **Modular Configuration**: Modular and reusable PayloadCMS architecture
- **VPS Support**: Specific optimizations for VPS deployment

#### 🎨 Enhanced Components
- **shadcn/ui Integration**: shadcn/ui components in PayloadKit blocks
- **Auth Security**: Improved authentication system in blank template
- **S3 Documentation**: Cloud storage configuration guides

### 🔄 Changes

- **Template System**: Blank template now includes modular configuration
- **Database**: PostgreSQL by default with MongoDB optional
- **Build System**: Optimized for production Docker environments

### 🐛 Fixes

- **Documentation**: Resolved React conflicts and accessibility issues
- **File Paths**: Fixed markdown loading in Next.js documentation
- **Search Dialog**: Added required DialogTitle for screen readers

---

## 🎯 Version 0.0.1 - September 12, 2024

### ✨ Initial Features

#### 🏗️ Core Framework
- **PayloadKit Framework**: Initial framework with registry system
- **CLI Tools**: payloadkit and create-payloadkit command-line interfaces
- **Component Registry**: Local file-based component discovery system
- **Template System**: Blank template with PayloadCMS integration

#### 📦 Architecture
- **Monorepo Structure**: Bun workspaces with packages and apps architecture
- **TypeScript**: Complete type safety across all packages
- **Block Components**: Reusable PayloadCMS blocks with React components
- **Collections System**: Reusable PayloadCMS collections (Users, Media, Pages)
- **Plugin Architecture**: Extensible plugin system following PayloadCMS patterns

### 📚 Packages

#### `payloadkit` - Main CLI
- **Commands**: `init`, `list`, `add` for component management
- **Registry System**: Component loading and discovery
- **Copy-paste Approach**: Maximum control over components
- **Project Detection**: Automatic PayloadCMS project detection

#### `create-payloadkit` - Project Generator
- **Scaffolding**: PayloadCMS project creation from templates
- **Blank Template**: Minimal foundation with PayloadCMS + PostgreSQL
- **Dependency Management**: Automatic package installation
- **Git Integration**: Repository initialization and first commit

#### `@payloadkit/core` - Types and Utilities
- **TypeScript Types**: Interfaces for PayloadKit ecosystem
- **Registry System**: Type definitions for registry and metadata
- **Shared Utilities**: Common functions and constants
- **Type Safety**: Complete TypeScript coverage

### 🛠️ Core Dependencies

- **PayloadCMS**: ^3.0.0+ integration
- **Next.js**: ^15.4.4 for documentation and templates
- **Bun**: Main package manager and build system
- **TypeScript**: Complete type safety and development experience
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library integration

---

## 📋 Changelog Format

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format:

- **✨ Added**: New features
- **🔄 Changed**: Changes to existing features
- **🗑️ Deprecated**: Features to be removed soon
- **🐛 Fixed**: Bug fixes
- **🔒 Security**: Security fixes
- **❌ Removed**: Removed features

Versioning follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Incompatible API changes
- **MINOR**: Backward-compatible new features
- **PATCH**: Backward-compatible bug fixes