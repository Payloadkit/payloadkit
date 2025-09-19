# @payloadkit/core Changelog

## 0.4.0

### Minor Changes

- feat: add Header, Footer, Theme globals to registry and template
  fix: update blank template with new structure and improved configuration

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

## [Unreleased]

### Added

- **Registry Types**: Enhanced TypeScript interfaces for component registry
- **Template Types**: Type definitions for template system and inheritance
- **Configuration Types**: Types for modular PayloadCMS configuration
- **Docker Types**: Type definitions for Docker development environment

## [0.0.1] - 2024-09-12

### Added

- **Core Types**: TypeScript interfaces for PayloadKit ecosystem
- **Registry System**: Type definitions for component registry and metadata
- **Template System**: Types for template processing and inheritance
- **Component Types**: Interfaces for blocks, collections, globals, and utilities
- **Shared Utilities**: Common functions and constants
- **Export System**: Clean module exports with TypeScript support

### Features

- **Type Safety**: Complete TypeScript coverage for all PayloadKit operations
- **IntelliSense**: Full IDE support with type hints and auto-completion
- **Validation**: Runtime type checking and validation utilities
- **Modularity**: Clean separation of concerns and dependency management

### Dependencies

- **TypeScript**: ^5.7.3 for type definitions and compilation
- **tsup**: Fast TypeScript build system
