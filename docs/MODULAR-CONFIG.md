# PayloadKit Modular Configuration

## 🏗️ Overview

PayloadKit now uses a **modular configuration architecture** that allows dividing PayloadCMS configuration into reusable and maintainable modules. No more monolithic `payload.config.ts` files!

## ✨ Benefits

- **🗄️ Smart Database**: PostgreSQL by default, MongoDB optional
- **☁️ Intelligent Deploy**: Auto-detection Vercel vs VPS (Dokploy)
- **📦 Modular**: Each aspect configured separately
- **🔄 Reusable**: Configs shared between projects
- **🚀 DATABASE_BUILD_URI**: VPS support without DB access at build

## 📂 Structure

```
src/config/
├── index.ts              # Main entry point
├── db-config/            # Database configuration
│   ├── index.ts          # Auto-selection PostgreSQL/MongoDB
│   ├── postgres.ts       # PostgreSQL adapter + smart connection
│   └── mongodb.ts        # MongoDB adapter (optional)
├── collections-config.ts # Collections configuration
├── plugins-config.ts     # Plugins configuration
├── globals-config.ts     # Globals configuration
├── jobs-config.ts        # Jobs/tasks configuration
└── email-config.ts       # Email configuration dev/prod
```

## 🚀 Quick Start

### Basic Configuration

```typescript
// src/payload.config.ts
import { buildConfig } from 'payload'
import {
  dbConfig,
  collectionsConfig,
  pluginsConfig,
  globalsConfig,
  jobsConfig,
  emailConfig,
} from './config'

export default buildConfig({
  // Modular configuration
  db: dbConfig,
  collections: collectionsConfig,
  plugins: pluginsConfig,
  globals: globalsConfig,
  jobs: jobsConfig,
  email: emailConfig,

  // Standard configuration
  secret: process.env.PAYLOAD_SECRET,
  // ...
})
```

## 🗄️ Database Configuration

### PostgreSQL (Default)

```typescript
// Automatic usage
import { dbConfig } from './config'

// Or explicit
import { postgresDbConfig } from './config'
```

### MongoDB (Optional)

```typescript
import { createDbConfig } from './config'

const dbConfig = createDbConfig('mongodb')
```

### Environment Variables

| Variable | Description | Environment |
|----------|-------------|-------------|
| `DATABASE_URI` | Main connection | Vercel + VPS runtime |
| `DATABASE_BUILD_URI` | Build-time connection | VPS only |
| `MONGODB_URI` | MongoDB connection | If MongoDB used |
| `MONGODB_BUILD_URI` | MongoDB build-time | VPS + MongoDB |

## ☁️ Intelligent Deployment

### Vercel (Automatic)
```bash
# Required variables
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret
```

### VPS/Dokploy (DATABASE_BUILD_URI)
```bash
# Build-time (database accessible at build)
DATABASE_BUILD_URI=postgresql://build-user:pass@build-host:5432/db

# Runtime (production database)
DATABASE_URI=postgresql://prod-user:pass@prod-host:5432/db
PAYLOAD_SECRET=your-production-secret
```

### Local Development
```bash
# Automatic fallback
DATABASE_URI=postgresql://localhost:5432/payloadkit_dev
```

## 📦 Configuration Extension

### Adding Custom Collections

```typescript
// src/config/collections-config.ts
import { createCollectionsConfig } from './collections-config'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'

export const collectionsConfig = createCollectionsConfig([
  Posts,
  Categories,
])
```

### Adding Custom Plugins

```typescript
// src/config/plugins-config.ts
import { createPluginsConfig } from './plugins-config'
import { searchPlugin } from '@payloadcms/plugin-search'

export const pluginsConfig = createPluginsConfig([
  searchPlugin({
    collections: ['posts'],
  }),
])
```

## 🔧 Email Configuration

### Development (Console)
```typescript
// Automatic in NODE_ENV=development
// Emails are logged to console
```

### Production (SMTP)
```bash
# Environment variables
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_ADDRESS=noreply@yourdomain.com
FROM_NAME="Your App Name"
```

## ⚙️ Jobs Configuration

### Jobs with Security

```typescript
// Automatic access for logged users
// Access via CRON_SECRET for automation

// Environment variables
CRON_SECRET=your-cron-secret

// Header for Vercel Cron
Authorization: Bearer your-cron-secret
```

## 🎯 Migration from Monolithic Config

### Before (Monolithic)
```typescript
export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  }),
  collections: [Users, Media, Pages],
  plugins: [seoPlugin(), formBuilderPlugin()],
  // ...
})
```

### After (Modular)
```typescript
export default buildConfig({
  db: dbConfig,           // Smart database with auto-detection
  collections: collectionsConfig,  // Reusable collections
  plugins: pluginsConfig, // Essential plugins
  // ...
})
```

## 🔍 Troubleshooting

### Problem: "Cannot find module '@payloadcms/db-mongodb'"

**Solution**: MongoDB is optional
```bash
# Install only if needed
bun add @payloadcms/db-mongodb
```

### Problem: Build fails on VPS

**Solution**: Check DATABASE_BUILD_URI
```bash
# Must be accessible during build
DATABASE_BUILD_URI=postgresql://builduser:pass@accessible-host:5432/builddb
```

### Problem: Emails not working

**Solution**: Check SMTP configuration
```bash
# All required variables
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=user@domain.com
SMTP_PASS=password
```

## 📚 Resources

- [PayloadCMS Configuration](https://payloadcms.com/docs/configuration/overview)
- [PostgreSQL Adapter](https://payloadcms.com/docs/database/postgres)
- [MongoDB Adapter](https://payloadcms.com/docs/database/mongodb)
- [Email Configuration](https://payloadcms.com/docs/email/overview)

---

> 💡 **Tip**: Start with the default configuration, then customize according to your needs!