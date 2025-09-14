# create-payloadkit Changelog

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