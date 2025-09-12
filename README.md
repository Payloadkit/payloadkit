# PayloadKit

> Build PayloadCMS applications faster with reusable components and templates.

PayloadKit is an open source framework that provides a collection of reusable components, blocks, and templates for PayloadCMS. Following the shadcn/ui philosophy, components are copied directly into your project, giving you full control and customization.

## ✨ Features

- 🚀 **Lightning Fast** - Get your PayloadCMS project up and running in minutes
- 📦 **Copy & Paste** - Components are copied into your project for full control
- 🎨 **Modern Design** - Built with TypeScript, TailwindCSS, and modern patterns
- 🏗️ **Production Ready** - Battle-tested components and configurations
- 🔧 **Customizable** - Modify components to fit your exact needs

## 🚀 Quick Start

### Create a new project

```bash
npx create-payloadkit@latest my-app
cd my-app
npm run dev
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

## 🧩 Available Components

### Blocks
- **Call to Action** - Versatile CTA sections with rich text and buttons
- **Hero Block** - Flexible hero sections for landing pages
- More components coming soon...

### Templates
- **Basic** - Minimal PayloadCMS setup
- **Blog** - Blog with posts and categories
- **Business** - Business website template
- **E-commerce** - Online store template

## 🛠️ CLI Commands

```bash
# Create new project
npx create-payloadkit@latest my-app

# Initialize in existing project
npx payloadkit init

# List available components
npx payloadkit list

# Add a component
npx payloadkit add <component-name>
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
```

## 📁 Project Structure

```
payloadkit/
├── packages/
│   ├── core/              # Shared types and utilities
│   ├── payloadkit/        # Main CLI
│   └── create-payloadkit/ # Project creation CLI
├── apps/
│   └── docs/             # Documentation website
├── registry/
│   ├── blocks/           # PayloadCMS blocks
│   ├── components/       # React components
│   └── index.json        # Registry metadata
└── templates/            # Project templates
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

- [Documentation](https://payloadkit.dev)
- [GitHub](https://github.com/j-corral/payloadkit)
- [PayloadCMS](https://payloadcms.com)

---

Built with ❤️ for the PayloadCMS community
