# PayloadKit Getting Started Guide

## 🚀 Quick Installation

### Option 1: New Project (Recommended)

```bash
# Create a new PayloadKit project
npx create-payloadkit@latest my-project

cd my-project

# Standard local development
bun dev

# OR Docker development (complete environment)
npm run docker:dev
```

### Option 2: Existing Project

```bash
# In your existing PayloadCMS project
npx payloadkit init

# Add components
npx payloadkit add hero-block call-to-action
npx payloadkit add db-config  # Smart configuration
```

## 🎯 Choose Your Environment

### 🖥️ Standard Local Development

**When to use:** Simple development, no need for external services

```bash
# Minimal configuration
echo "DATABASE_URI=postgresql://localhost:5432/my_project" > .env
echo "PAYLOAD_SECRET=my-local-secret" >> .env

# Launch
bun dev
```

### 🐳 Docker Development (Recommended)

**When to use:** First project, email testing, full-stack development

```bash
# Complete environment in one command
npm run docker:dev

# Included services:
# - PayloadKit app (hot-reload)
# - PostgreSQL 16 with extensions
# - Web interface at: http://localhost:3000
```

### 🌐 Full Docker Development

**When to use:** Advanced development, email testing, database management

```bash
# All services
npm run docker:dev:full

# Additional services:
# - Redis (cache): localhost:6379
# - MailHog (emails): localhost:8025
# - pgAdmin (DB): localhost:5050
```

## 🗄️ Database Configuration

### Smart Auto-Detection

PayloadKit automatically detects your environment:

```typescript
// src/config/db-config/index.ts
export const dbConfig = createDbConfig() // PostgreSQL by default

// Or explicitly
export const dbConfig = createDbConfig('mongodb') // MongoDB
```

### Environment Variables

```bash
# PostgreSQL (default)
DATABASE_URI=postgresql://user:pass@host:5432/db

# MongoDB (optional)
MONGODB_URI=mongodb://localhost:27017/my_project

# VPS/Dokploy (build separate from runtime)
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build
DATABASE_URI=postgresql://prod:pass@private:5432/prod
```

## 📦 Adding Components

### Basic Interface

```bash
# Essential components
npx payloadkit add Users Media Pages

# React components
npx payloadkit add RichText CMSLink
```

### Content Blocks

```bash
# Landing page
npx payloadkit add hero-block call-to-action

# Content
npx payloadkit add faq content feature

# Marketing
npx payloadkit add banner media-block
```

### Advanced Configuration

```bash
# Smart database
npx payloadkit add db-config

# Docker setup
npx payloadkit add dockerfile-dev docker-compose-dev

# Email configuration
npx payloadkit add email-config
```

## 🚀 Deployment

### Vercel (Zero Config)

```bash
# Vercel variables
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret

# Deploy
vercel deploy
```

### VPS/Dokploy (Smart Build)

```bash
# Build-time variables
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# Runtime variables
DATABASE_URI=postgresql://prod:pass@private:5432/prod
PAYLOAD_SECRET=your-production-secret

# Dokploy deploys automatically
```

## 🛠️ Development Workflows

### Daily Development

```bash
# Option 1: Standard
bun dev                    # http://localhost:3000

# Option 2: Docker (recommended)
npm run docker:dev         # Complete environment
npm run docker:logs        # View logs
npm run docker:db          # Direct PostgreSQL access
```

### Adding Features

```bash
# 1. Add components
npx payloadkit add new-component

# 2. Customize in src/
# 3. Test in development
npm run docker:dev

# 4. Deploy
git push origin main  # Auto-deploy on Vercel/Dokploy
```

### Debug and Testing

```bash
# Application logs
npm run docker:logs

# Direct database access
npm run docker:db
# > SELECT * FROM users;

# MailHog web interface (emails)
open http://localhost:8025

# pgAdmin web interface (DB)
open http://localhost:5050
```

## 📧 Email Configuration

### Development (MailHog)

```bash
# With full Docker
npm run docker:dev:full

# .env variables
SMTP_HOST=mailhog
SMTP_PORT=1025
# No auth needed

# Emails visible at http://localhost:8025
```

### Production (SMTP)

```bash
# .env.production variables
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_ADDRESS=noreply@yourdomain.com
FROM_NAME="My App"
```

## 🎯 Common Use Cases

### 1. First PayloadCMS Project

```bash
# Complete setup in 3 minutes
npx create-payloadkit@latest my-first-project
cd my-first-project
npm run docker:dev

# Open http://localhost:3000/admin
# Create your first admin user
```

### 2. Migrating Existing PayloadCMS

```bash
# In your existing project
npx payloadkit init

# Migrate to modular config
npx payloadkit add db-config collections-config

# Replace payload.config.ts
# (see docs/MODULAR-CONFIG.md)
```

### 3. Business/Marketing Site

```bash
# Template with marketing components
npx create-payloadkit@latest my-business
cd my-business

# Add blocks
npx payloadkit add hero-block feature faq call-to-action

npm run docker:dev
```

### 4. Team Development

```bash
# Reproducible environment
git clone your-project
cd your-project

# Identical setup for everyone
npm run docker:dev

# Same database + services
# No "works on my machine"
```

## 🔧 Customization

### Modify a Component

```bash
# Add the component
npx payloadkit add hero-block

# Customize in your project
# src/blocks/hero-block/Component.tsx
# src/blocks/hero-block/config.ts
```

### Create a New Block

```bash
# Copy an existing block as base
cp -r src/blocks/hero-block src/blocks/my-block

# Customize
# src/blocks/my-block/Component.tsx
# src/blocks/my-block/config.ts

# Add to PayloadCMS
# src/config/collections-config.ts
```

### Advanced Configuration

```typescript
// src/config/plugins-config.ts
import { createPluginsConfig } from './plugins-config'
import { searchPlugin } from '@payloadcms/plugin-search'

export const pluginsConfig = createPluginsConfig([
  searchPlugin({
    collections: ['posts', 'pages'],
  }),
])
```

## ❓ FAQ

### Q: PayloadKit vs PayloadCMS?
**A:** PayloadKit enriches PayloadCMS with components, configurations and tools. PayloadCMS remains the core.

### Q: Can I use npm instead of bun?
**A:** Yes, replace `bun` with `npm` or `yarn`. Docker works with all.

### Q: How to change the database?
**A:**
```typescript
import { createDbConfig } from './config'
export const dbConfig = createDbConfig('mongodb')
```

### Q: Is Docker mandatory?
**A:** No, it's optional. `bun dev` works perfectly for simple development.

### Q: How to deploy to my VPS?
**A:** See [docs/VPS-DEPLOYMENT.md](VPS-DEPLOYMENT.md) for Dokploy, Railway, etc.

## 📚 Next Steps

1. **[Modular Configuration](MODULAR-CONFIG.md)** - Understand the architecture
2. **[Docker Development](DOCKER-SETUP.md)** - Development environment
3. **[VPS Deployment](VPS-DEPLOYMENT.md)** - Production deployment

## 🆘 Support

- **Documentation**: All guides in `/docs`
- **Issues**: GitHub Issues for bugs
- **Community**: PayloadCMS Discord for questions

---

> 🎯 **Goal**: Be productive with PayloadCMS in less than 5 minutes!