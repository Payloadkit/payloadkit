# create-payloadkit Changelog

## 0.1.0

### Minor Changes

- Complete documentation system overhaul and interactive enhancements

  ## 🎉 Major Documentation System Transformation

  ### ✨ New Features
  - **Interactive Documentation**: All code examples now feature syntax highlighting and clipboard functionality
  - **Unified Page Architecture**: Consistent PageDescription, navigation, and component structure across all pages
  - **Enhanced Developer Experience**: Interactive CodeBlock components with copy-to-clipboard in 15+ locations
  - **Improved Search and Navigation**: Better discoverability with consistent tagging and categorization

  ### 📚 Documentation Improvements
  - **Complete Page Restructure**: CLI, Docker, Security, Storage, Examples, and Component pages transformed
  - **Migration Guides**: Comprehensive v1.x to v2.x migration documentation with code examples
  - **Usage Examples**: Interactive examples for all blocks and components with proper syntax highlighting
  - **Accessibility Documentation**: Enhanced keyboard navigation and WCAG compliance documentation

  ### 🐛 Bug Fixes
  - **Hydration Issues**: Fixed hydration mismatch errors in Snippet components
  - **Layout Problems**: Resolved horizontal scroll issues across multiple documentation pages
  - **Build Errors**: Fixed JSX parsing failures and template string escaping issues
  - **Component Consistency**: Standardized all documentation components for uniform experience

  ### 🔧 Technical Enhancements
  - **CodeBlock Integration**: Replaced 50+ static code blocks with interactive components
  - **Template Literal Migration**: Fixed width issues by converting escaped strings to template literals
  - **Component Architecture**: Improved type safety and prop validation across documentation
  - **Performance Optimizations**: Better image loading and responsive design implementation

  ### 📖 Updated Pages
  - **CLI Documentation**: Complete interactive command reference
  - **Docker Setup Guide**: Full containerization and deployment documentation
  - **Security Guide**: Comprehensive authentication and compliance documentation
  - **Component Library**: blocks-shared, blog-template, and changelog with interactive examples
  - **Storage Configuration**: Cloud storage setup with interactive configuration examples

  This release represents a major step forward in developer experience and documentation quality, providing a modern, interactive, and comprehensive resource for PayloadKit users.

### Patch Changes

- Updated dependencies
  - @payloadkit/core@0.1.0

## [Unreleased]

### Added

- **Modular Configuration**: Smart database detection and modular PayloadCMS config
- **Docker Support**: Complete Docker development environment setup
- **VPS Deployment**: Production-ready Dockerfile for VPS deployment
- **DATABASE_BUILD_URI**: Support for build-time database connections

### Changed

- **Blank Template**: Enhanced with modular configuration system
- **Database Default**: PostgreSQL as default with MongoDB optional
- **Security**: Improved authentication system

## [0.0.1] - 2024-09-12

### Added

- **Project Scaffolding**: Create new PayloadCMS projects from templates
- **Template System**: Ready-to-use project templates
- **Blank Template**: Minimal foundation with PayloadCMS + PostgreSQL
- **Dependency Management**: Automatic package installation
- **Git Integration**: Initialize git repository and first commit
- **Interactive CLI**: Beautiful prompts and user experience
- **Template Inheritance**: Specialized templates extend base templates
- **Environment Setup**: Automatic .env file generation

### Templates

- **blank**: Minimal foundation with PayloadCMS, PostgreSQL, shadcn/ui, Next.js App Router

### Dependencies

- **PayloadCMS**: ^3.0.0+ with PostgreSQL adapter
- **Next.js**: ^15.4.4 with App Router
- **TypeScript**: Full type safety
- **TailwindCSS**: Utility-first CSS framework
- **Bun**: Fast package manager and runtime
