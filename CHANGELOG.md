# PayloadKit Changelog

All notable changes to PayloadKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Documentation Site**: Complete Next.js documentation website with search functionality
- **Search**: Functional search with Ctrl+K shortcut and keyboard navigation
- **Accessibility**: Full WCAG compliance with screen reader support
- **Docker Development**: Complete Docker setup with PostgreSQL, Redis, and MailHog
- **VPS Deployment**: Production-ready Dockerfile optimized for Dokploy deployment
- **Modular Configuration**: Smart database detection with PostgreSQL/MongoDB support
- **DATABASE_BUILD_URI**: Support for VPS build-time database connections
- **Enhanced Blocks**: shadcn/ui components integration in PayloadKit blocks
- **Auth Security**: Better authentication system in blank template
- **S3 Documentation**: Cloud storage configuration guides
- **Feature Steps Block**: Step-by-step process block with 16 icons and 5 layout options including advanced stair layout
- **Big Hero Block**: Advanced hero section with video background support, scroll indicators, and parallax effects
- **Cal.com Block**: Cal.com integration block with iframe embedding, multiple themes, and responsive layouts
- **Outline Block**: Automatic table of contents generator with client-side heading detection and scroll tracking
- **Simple Hero Block**: Clean hero section with customizable backgrounds and call-to-action buttons
- **Block Documentation**: Complete documentation pages for all new blocks with usage examples and prop tables
- **Navigation Updates**: Enhanced sidebar navigation with "New" badges for block discovery

### Changed
- **Template System**: Blank template now includes modular configuration
- **Database**: PostgreSQL as default with MongoDB as optional alternative
- **Build System**: Optimized for Docker production environments

### Fixed
- **Documentation**: Resolved React conflicts and accessibility issues
- **File Paths**: Corrected markdown file loading in Next.js documentation
- **Search Dialog**: Added required DialogTitle for screen readers
- **JSX Syntax Errors**: Fixed template string parsing errors in documentation pages with unescaped characters
- **Build Errors**: Resolved multiple JSX parsing failures preventing documentation site compilation
- **Cal.com Documentation**: Complete rewrite of Cal.com block documentation page to fix complex template string issues

## [0.0.1] - 2024-09-12

### Added
- **Core Framework**: Initial PayloadKit framework with registry system
- **CLI Tools**: payloadkit and create-payloadkit command-line interfaces
- **Component Registry**: Local file-based component discovery system
- **Template System**: Blank template with PayloadCMS integration
- **Monorepo Structure**: Bun workspaces with packages and apps architecture
- **TypeScript**: Full type safety across all packages
- **Block Components**: Reusable PayloadCMS blocks with React components
- **Collection System**: Reusable PayloadCMS collections (Users, Media, Pages)
- **Plugin Architecture**: Extensible plugin system following PayloadCMS patterns

### Dependencies
- **PayloadCMS**: ^3.0.0+ integration
- **Next.js**: ^15.4.4 for documentation and templates
- **Bun**: Primary package manager and build system
- **TypeScript**: Full type safety and development experience
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library integration