# VPS Deployment with PayloadKit

## 🚀 Overview

PayloadKit simplifies VPS deployment (Dokploy, CapRover, etc.) by automatically managing differences between **build-time** and **runtime**. No more need to create dummy databases for builds!

## 🎯 Problem Solved

On VPS, the production database is often **not accessible during build**. PayloadCMS needs a DB connection to generate TypeScript types, which causes deployment errors.

### ❌ Before PayloadKit
```bash
# Build fails because prod DB is not accessible
ERROR: Connection failed to postgresql://prod:pass@private-host:5432/db
```

### ✅ With PayloadKit
```bash
# Build succeeds with DATABASE_BUILD_URI
✅ Connected to build database
✅ Types generated successfully
✅ Build completed
# Runtime uses DATABASE_URI (prod DB)
✅ Connected to production database
```

## 🏗️ Smart Architecture

PayloadKit automatically detects the environment and uses the right configuration:

| Environment | Build | Runtime | Configuration |
|-------------|-------|---------|---------------|
| **Vercel** | DATABASE_URI | DATABASE_URI | Auto-detection |
| **VPS/Dokploy** | DATABASE_BUILD_URI | DATABASE_URI | Smart fallback |
| **Local Dev** | DATABASE_URI | DATABASE_URI | Local fallback |

## 🔧 VPS Configuration

### 1. Environment Variables

```bash
# Build database (accessible during build)
DATABASE_BUILD_URI=postgresql://build_user:build_pass@accessible_host:5432/build_db

# Production database (runtime)
DATABASE_URI=postgresql://prod_user:prod_pass@private_host:5432/prod_db

# Other variables
PAYLOAD_SECRET=your-super-secure-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Email (optional)
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
```

### 2. Optimized Dockerfile

The PayloadKit Dockerfile is optimized for VPS:

```dockerfile
# Build stage with DATABASE_BUILD_URI
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_URI="postgresql://dummy:dummy@localhost:5432/dummy"
# DATABASE_BUILD_URI will be injected by Dokploy

# Type generation with build DB
RUN bunx payload generate:types && \
    bunx payload generate:importmap && \
    bun run build

# Production stage with DATABASE_URI
FROM oven/bun:1-alpine AS runner
# DATABASE_URI will be injected by Dokploy at runtime
```

## 🎯 Dokploy Setup

### 1. Service Creation

```yaml
# dokploy.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - DATABASE_BUILD_URI=${DATABASE_BUILD_URI}
      - DATABASE_URI=${DATABASE_URI}
      - PAYLOAD_SECRET=${PAYLOAD_SECRET}
      - NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
    ports:
      - "3000:3000"
```

### 2. Variables in Dokploy

In the Dokploy interface, configure:

**Build Variables:**
```
DATABASE_BUILD_URI=postgresql://builduser:buildpass@accessible-db:5432/builddb
```

**Runtime Variables:**
```
DATABASE_URI=postgresql://produser:prodpass@private-db:5432/proddb
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

### 3. Build Database

Create a database accessible during build:

```sql
-- Temporary database for build
CREATE DATABASE payloadkit_build;
CREATE USER build_user WITH PASSWORD 'build_password';
GRANT ALL PRIVILEGES ON DATABASE payloadkit_build TO build_user;

-- Required extensions
\c payloadkit_build;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
```

## 🛠️ Other VPS Platforms

### CapRover

```json
{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM your-registry/payloadkit-app:latest"
  ],
  "envVars": [
    {
      "key": "DATABASE_BUILD_URI",
      "value": "postgresql://build:pass@build-db:5432/build"
    },
    {
      "key": "DATABASE_URI",
      "value": "postgresql://prod:pass@srv-captain--db:5432/prod"
    }
  ]
}
```

### Railway

```bash
# Railway variables
railway variables set DATABASE_BUILD_URI="postgresql://build:pass@build.railway.app:5432/railway"
railway variables set DATABASE_URI="postgresql://prod:pass@prod.railway.app:5432/railway"
railway variables set PAYLOAD_SECRET="your-secret"
```

### Coolify

```yaml
# docker-compose.yml for Coolify
services:
  app:
    build: .
    environment:
      DATABASE_BUILD_URI: $DATABASE_BUILD_URI
      DATABASE_URI: $DATABASE_URI
      PAYLOAD_SECRET: $PAYLOAD_SECRET
    labels:
      - "coolify.managed=true"
```

## 🔍 Troubleshooting

### Error: "Cannot connect to database during build"

**Solution**: Check DATABASE_BUILD_URI

```bash
# Test connection to build DB
psql "${DATABASE_BUILD_URI}" -c "SELECT 1;"

# Check environment variables
echo $DATABASE_BUILD_URI
```

### Error: "Types generation failed"

**Solution**: Invalid build database

```bash
# Build DB must have PayloadCMS extensions
psql "${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"
psql "${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \"pgcrypto\";"
```

### Error: "Application starts but database connection fails"

**Solution**: Check DATABASE_URI at runtime

```bash
# Verify DATABASE_URI is accessible from container
docker exec your-container env | grep DATABASE_URI
```

### Performance: Slow build

**Solution**: Optimize build database

```sql
-- Minimal build database (no data)
CREATE DATABASE payloadkit_build_minimal;
-- Only required extensions
```

## 🎯 Best Practices

### 1. Build/Runtime Separation

```bash
# Build DB: Minimal, accessible, temporary
DATABASE_BUILD_URI=postgresql://build:pass@public-build-db:5432/build

# Prod DB: Secure, private, with real data
DATABASE_URI=postgresql://prod:pass@private-prod-db:5432/prod
```

### 2. Security

```bash
# Build DB: Limited permissions
CREATE USER build_user WITH PASSWORD 'temp_build_password';
GRANT CONNECT ON DATABASE build_db TO build_user;

# Prod DB: Full permissions
CREATE USER prod_user WITH PASSWORD 'secure_prod_password';
GRANT ALL PRIVILEGES ON DATABASE prod_db TO prod_user;
```

### 3. Monitoring

```bash
# Build logs
docker logs your-build-container

# Runtime logs
docker logs your-app-container

# DB verification
docker exec your-app psql $DATABASE_URI -c "SELECT version();"
```

## 📊 Solution Comparison

| Method | Complexity | Security | Performance |
|--------|------------|----------|-------------|
| **PayloadKit** | ⭐ Simple | ⭐⭐⭐ Excellent | ⭐⭐⭐ Fast |
| Dummy DB | ⭐⭐ Medium | ⭐ Poor | ⭐⭐ Medium |
| Tunneling | ⭐⭐⭐ Complex | ⭐⭐ Medium | ⭐ Slow |

## 🚀 Migration to PayloadKit

### From Classic Config

```typescript
// Before
export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  })
})

// After (PayloadKit)
import { dbConfig } from './config'

export default buildConfig({
  db: dbConfig  // Smart database with BUILD_URI support
})
```

### Variables to Add

```bash
# Only add DATABASE_BUILD_URI
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# DATABASE_URI remains the same
DATABASE_URI=postgresql://prod:pass@private:5432/prod
```

## 📚 Resources

- [PayloadKit Modular Configuration](MODULAR-CONFIG.md)
- [Docker Development Setup](DOCKER-SETUP.md)
- [Dokploy Documentation](https://dokploy.com)
- [PayloadCMS Deployment Guide](https://payloadcms.com/docs/production/deployment)

---

> 🎯 **Result**: Frictionless VPS deployment, secure production database, fast and reliable builds!