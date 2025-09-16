# PayloadKit

> IKEA for Web Development - Build PayloadCMS applications faster with reusable components and templates.

PayloadKit is an open source framework that provides a collection of reusable components, blocks, and templates for PayloadCMS. Following the shadcn/ui philosophy, components are copied directly into your project, giving you full control and customization.

## ✨ Features

- 🚀 **Lightning Fast** - Get your PayloadCMS project up and running in minutes
- 📦 **Copy & Paste** - Components are copied into your project for full control
- 🎨 **Modern Design** - Built with TypeScript, TailwindCSS, and shadcn/ui
- 🏗️ **Production Ready** - Battle-tested components and configurations
- 🔧 **Customizable** - Modify components to fit your exact needs
- 🏠 **IKEA Philosophy** - Templates as minimal shells, registry as reusable intelligence
- 🗄️ **Smart Database** - PostgreSQL by default, MongoDB optional with auto-detection
- ☁️ **Deploy Anywhere** - Auto-detection Vercel vs VPS with DATABASE_BUILD_URI support
- 🐳 **Docker Ready** - Complete development environment with one command

## 🚀 Quick Start

### Create a new project

```bash
# Create with default (blank) template
npx create-payloadkit@latest my-app

# Create with specific template
npx create-payloadkit@latest my-blog --template blog

# With custom options
npx create-payloadkit@latest my-business \
  --template business \
  --package-manager bun \
  --no-git

cd my-app

# Development with bun
bun dev

# Or with Docker (complete environment)
npm run docker:dev
```

### Add to existing project

```bash
# Initialize PayloadKit in your existing PayloadCMS project
npx payloadkit init

# Add components
npx payloadkit add call-to-action
npx payloadkit add hero-block
```

## 📚 Documentation

Visit our [documentation site](https://payloadkit.dev) for:

- Installation guides
- Component library
- CLI usage
- Examples and templates
- Best practices

### New in v0.2.0

- **📋 [Modular Configuration](docs/MODULAR-CONFIG.md)** - Smart database setup with PostgreSQL/MongoDB auto-detection
- **🐳 [Docker Development Setup](docs/DOCKER-SETUP.md)** - Complete environment with PostgreSQL, Redis, MailHog
- **☁️ [VPS Deployment Guide](docs/VPS-DEPLOYMENT.md)** - DATABASE_BUILD_URI support for Dokploy and VPS deployments

## 🧩 Registry Components

### 📦 Blocks (PayloadCMS)
- **Hero Block** - Flexible hero sections with title, subtitle, and CTA buttons
- **Call to Action** - Versatile CTA sections with rich text and buttons  
- **FAQ Block** - Frequently asked questions with shadcn/ui Accordion
- **Banner Block** - Notification and announcement banners
- **Content Block** - Rich text content sections
- **Feature Block** - Feature showcase with cards and icons
- **Logo Cloud** - Partner/client logo displays
- **Quote Block** - Testimonials and quote sections
- **Statistics** - Number displays with descriptions

### ⚛️ Components (React)
- **RichText** - PayloadCMS rich text renderer with Lexical
- **CMSLink** - Smart link component for internal/external navigation

### 📁 Collections (PayloadCMS)
- **Users** - Authentication and user management
- **Media** - File and image management
- **Pages** - Content page management

### 🏗️ Templates
- **Blank** - Minimal foundation with modular config, Docker setup, and shadcn/ui
- **Blog** - Blog-focused setup with posts and categories (coming soon)
- **Business** - Marketing website template (coming soon)
- **E-commerce** - Online store template (coming soon)

### ⚙️ Configuration (New!)
- **db-config** - Smart database with PostgreSQL/MongoDB + VPS support
- **collections-config** - Modular collections management
- **plugins-config** - Essential PayloadCMS plugins
- **email-config** - SMTP/development email setup
- **jobs-config** - Background tasks with security

### 🐳 Docker (New!)
- **dockerfile-dev** - Multi-stage Dockerfile with bun optimization
- **docker-compose-dev** - Complete development environment
- **dockerignore** - Optimized .dockerignore for PayloadCMS

## 🛠️ CLI Commands

### create-payloadkit (Project Creation)
```bash
# Create new project with blank template
npx create-payloadkit@latest my-app

# Create with specific template
npx create-payloadkit@latest my-blog --template blog

# Create with custom package manager
npx create-payloadkit@latest my-app --package-manager bun

# Skip installation and git initialization
npx create-payloadkit@latest my-app --no-install --no-git
```

### payloadkit (Component Management)
```bash
# Initialize in existing PayloadCMS project
npx payloadkit init

# List available registry components
npx payloadkit list

# Add specific components
npx payloadkit add hero-block call-to-action
npx payloadkit add Users Media
npx payloadkit add RichText CMSLink

# Add configuration modules (New!)
npx payloadkit add db-config
npx payloadkit add docker dockerfile-dev docker-compose-dev
```

## 🏗️ Development

This project uses bun workspaces:

```bash
# Install dependencies
bun install

# Build all packages
bun run build

# Start documentation site
bun run dev:docs

# Start CLI development
bun run dev

# Docker development (New!)
npm run docker:dev          # Basic environment
npm run docker:dev:full     # Full stack with Redis, MailHog, pgAdmin
```

## 📁 Project Structure

```
payloadkit/
├── packages/
│   ├── core/                  # Shared types and utilities
│   ├── payloadkit/            # Main CLI for component management
│   └── create-payloadkit/     # Project creation CLI
│       └── templates/         # Project templates (blank, blog, etc.)
├── apps/
│   └── docs/                 # Documentation website
├── docs/                     # Documentation files (New!)
│   ├── MODULAR-CONFIG.md     # Configuration modulaire guide
│   └── DOCKER-SETUP.md       # Docker development guide
└── registry/
    ├── index.json            # Registry metadata
    ├── blocks/               # PayloadCMS blocks
    │   ├── hero-block/
    │   ├── call-to-action/
    │   ├── faq/
    │   └── ...
    ├── components/           # React components
    │   ├── RichText/
    │   ├── CMSLink/
    │   └── ...
    ├── collections/          # PayloadCMS collections
    │   ├── Users/
    │   ├── Media/
    │   ├── Pages/
    │   └── ...
    ├── config/               # Configuration modules (New!)
    │   ├── db-config/        # Smart database setup
    │   ├── collections-config/
    │   ├── plugins-config/
    │   └── ...
    └── docker/               # Docker setup (New!)
        ├── dockerfile-dev/   # Multi-stage Dockerfile
        ├── docker-compose-dev/
        └── dockerignore/
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PayloadCMS](https://payloadcms.com) - The headless CMS that powers everything
- [shadcn/ui](https://ui.shadcn.com) - Inspiration for the copy-paste approach
- [Next.js](https://nextjs.org) - Framework powering our documentation
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework

## 🔗 Links

- [Documentation](https://payloadkit.conabea.com)
- [GitHub](https://github.com/payloadkit/payloadkit)
- [PayloadCMS](https://payloadcms.com)

---

Built with ❤️ for the PayloadCMS community
