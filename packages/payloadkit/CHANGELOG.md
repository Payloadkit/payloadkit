# payloadkit CLI Changelog

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

- **Registry System**: Enhanced component discovery and copying
- **Type Safety**: Improved TypeScript interfaces and utilities
- **Error Handling**: Better error messages and user feedback

## [0.0.1] - 2024-09-12

### Added

- **Core Commands**: `init`, `list`, `add` commands for component management
- **Registry Loading**: Local file-based component registry system
- **Component Copying**: Copy-paste approach for maximum control
- **Project Detection**: Automatic PayloadCMS project detection
- **File Operations**: Secure file copying and directory management
- **CLI Interface**: Beautiful CLI with Commander.js
- **TypeScript Support**: Full type safety and IntelliSense
- **Cross-Platform**: Works on Windows, macOS, and Linux

### Dependencies

- **Commander.js**: CLI framework and command parsing
- **@payloadkit/core**: Core types and utilities
- **tsup**: Fast TypeScript compilation
- **Node.js**: ^18.20.2 || >=20.9.0 compatibility
