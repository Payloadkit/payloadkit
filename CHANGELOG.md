# PayloadKit Changelog

All notable changes to PayloadKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-01-15

### Added
- **Interactive Documentation System**: Complete overhaul of documentation with syntax highlighting and clipboard functionality
- **Enhanced Developer Experience**: 50+ interactive CodeBlock components replacing static code examples
- **Unified Page Architecture**: Consistent PageDescription, navigation, and component structure across all documentation
- **Migration Documentation**: Comprehensive v1.x to v2.x upgrade guides with interactive code examples
- **Enhanced Accessibility**: WCAG-compliant documentation with improved keyboard navigation and screen reader support

### Changed
- **Documentation Architecture**: All pages transformed to use modern interactive components instead of static HTML
- **Code Examples**: Replaced 50+ static pre/code blocks with interactive CodeBlock components featuring copy functionality
- **Page Structure**: Unified all documentation pages with consistent PageDescription headers and navigation
- **Developer Experience**: Enhanced clipboard functionality and syntax highlighting across all code examples

### Fixed
- **Hydration Issues**: Resolved hydration mismatch errors in Snippet components with suppressHydrationWarning
- **Layout Problems**: Fixed horizontal scroll issues across CLI, Docker, Security, and Storage documentation pages
- **Template Strings**: Converted escaped strings to template literals preventing width overflow issues
- **Build Errors**: Resolved JSX parsing failures and component rendering issues in documentation system

### Added (Previous Features)
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
- **Phase 6 Improvements**: Major registry enhancements and developer experience improvements
- **Unit Testing**: Comprehensive test suite with 31 passing tests using Vitest and React Testing Library
- **OptimizedImage Component**: Performance-optimized image loading with Intersection Observer API and lazy loading
- **Accessibility Hooks**: useKeyboardNavigation and useFocusManagement hooks for WCAG 2.1 AA compliance
- **Focus Management**: Complete keyboard navigation support with arrow keys, enter/space, and escape handling
- **Utility Classes**: Accessibility utility classes (focusClasses, buttonBaseClasses, srOnlyClasses)
- **Color Contrast**: WCAG-compliant color pairs for light and dark themes
- **Migration Guide**: Comprehensive migration documentation for upgrading from v1.x to v2.x
- **TypeScript Documentation**: Complete type definitions documentation with usage examples

### Changed
- **Template System**: Blank template now includes modular configuration
- **Database**: PostgreSQL as default with MongoDB as optional alternative
- **Build System**: Optimized for Docker production environments
- **Registry Structure**: Cleaned up redundant blocks (faq → faq-block, feature → feature-block, banner → banner-block)
- **TypeScript Types**: Replaced 51+ `any` types with strict TypeScript interfaces and type definitions
- **FAQ Block**: Updated to use shadcn/ui Accordion component with new props (type, collapsible, defaultValue)
- **Hero Blocks**: CTA buttons now use shadcn/ui Button component with automatic appearance mapping
- **Archive Block**: Enhanced with shadcn/ui Card and Badge components for better consistency
- **Component Architecture**: All blocks now extend standardized interfaces (BaseBlockProps, ContentBlockProps, ActionBlockProps)
- **Image Handling**: Standard img tags replaced with OptimizedImage component for better performance

### Fixed
- **Documentation**: Resolved React conflicts and accessibility issues
- **File Paths**: Corrected markdown file loading in Next.js documentation
- **Search Dialog**: Added required DialogTitle for screen readers
- **JSX Syntax Errors**: Fixed template string parsing errors in documentation pages with unescaped characters
- **Build Errors**: Resolved multiple JSX parsing failures preventing documentation site compilation
- **Cal.com Documentation**: Complete rewrite of Cal.com block documentation page to fix complex template string issues
- **Type Safety**: Eliminated all loose typing issues with strict TypeScript interfaces
- **Test Configuration**: Resolved Vitest jsdom configuration issues with React component testing
- **Component Interfaces**: Fixed missing type definitions and prop validation across all blocks
- **Accessibility Issues**: Resolved ARIA attribute and focus management issues in interactive components
- **Performance Issues**: Fixed image loading performance problems with lazy loading implementation

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