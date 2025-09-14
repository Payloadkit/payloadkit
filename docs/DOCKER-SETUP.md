# PayloadKit Docker Development Setup

## 🐳 Overview

PayloadKit now offers a **complete Docker development environment** with PostgreSQL, Redis, MailHog, and pgAdmin. Just one `docker-compose up` and you have a PayloadCMS stack ready to develop!

## ✨ Features

- **🐋 Multi-stage Dockerfile**: Optimized Dev, Build, and Production stages
- **📦 PostgreSQL 16**: Database with extensions and health checks
- **⚡ Hot-reload**: Development with automatic reload
- **🔧 Optional Services**: Redis, MailHog, pgAdmin
- **🚀 Production Ready**: Compatible with Dokploy/VPS
- **🛡️ Secure**: Non-root user, health checks

## 🚀 Quick Start

### 1. Standard Launch
```bash
# Basic environment (app + PostgreSQL)
npm run docker:dev

# Or in background
npm run docker:dev:detached
```

### 2. Full Environment
```bash
# With Redis, MailHog, and pgAdmin
npm run docker:dev:full
```

### 3. First Build
```bash
# Build and launch
npm run docker:dev:build
```

## 📂 Docker Structure

```
project/
├── Dockerfile              # Multi-stage (dev, builder, runner)
├── docker-compose.yml      # Complete environment
├── .dockerignore          # Build context optimization
├── init.sql               # PostgreSQL initialization
└── .env                   # Environment variables
```

## 🔧 Available Services

| Service | Port | Description | Profile |
|---------|------|-------------|---------|
| **app** | 3000 | PayloadKit + Next.js | Always |
| **postgres** | 5432 | PostgreSQL 16 + extensions | Always |
| **redis** | 6379 | Cache and sessions | `full` |
| **mailhog** | 8025 | Test email interface | `full` |
| **mailhog-smtp** | 1025 | Test SMTP server | `full` |
| **pgadmin** | 5050 | PostgreSQL administration | `full` |

## 📋 Available NPM Scripts

```bash
# Development
npm run docker:dev          # Standard launch
npm run docker:dev:build    # Build + launch
npm run docker:dev:detached # Background launch
npm run docker:dev:full     # Full environment

# Management
npm run docker:stop         # Stop all services
npm run docker:reset        # Complete reset (removes volumes)
npm run docker:logs         # View app logs
npm run docker:db           # Direct PostgreSQL connection
```

## 🗄️ Database Configuration

### Environment Variables
```bash
# .env
POSTGRES_USER=payloadkit
POSTGRES_PASSWORD=payloadkit
POSTGRES_DB=payloadkit_dev

# PayloadKit
DATABASE_URI=postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev
PAYLOAD_SECRET=your-secret-key
```

### Direct DB Access
```bash
# Via Docker Compose
npm run docker:db

# Or directly
docker-compose exec postgres psql -U payloadkit -d payloadkit_dev
```

### pgAdmin (Web Interface)
- **URL**: http://localhost:5050
- **Email**: admin@payloadkit.dev
- **Password**: admin

## 📧 Email Testing with MailHog

### Configuration
```bash
# .env
SMTP_HOST=mailhog
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=
```

### Web Interface
- **URL**: http://localhost:8025
- All emails sent by PayloadCMS appear here
- Perfect for testing email workflows

## 🚀 Production with Dokploy/VPS

### Multi-Stage Dockerfile

The Dockerfile includes 3 optimized stages:

```dockerfile
# Stage 1: Development (hot-reload)
FROM oven/bun:1-alpine AS dev

# Stage 2: Build (type generation + build)
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_BUILD_URI=postgresql://...

# Stage 3: Production (optimized standalone)
FROM oven/bun:1-alpine AS runner
```

### Production Variables

```bash
# Build-time (if base accessible at build)
DATABASE_BUILD_URI=postgresql://build-user:pass@build-host:5432/build-db

# Runtime
DATABASE_URI=postgresql://prod-user:pass@prod-host:5432/prod-db
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Production email
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
```

### Production Build

```bash
# Build production image
docker build --target runner -t payloadkit-prod .

# Or with Dokploy (automatic)
# Dokploy automatically uses the 'runner' stage
```

## 🔧 Customization

### Adding Services

```yaml
# docker-compose.yml
services:
  # Custom service
  elasticsearch:
    image: elasticsearch:8.11.0
    ports:
      - '9200:9200'
    environment:
      - discovery.type=single-node
    profiles:
      - search
```

### Modifying PostgreSQL

```sql
-- init.sql: Adding extensions
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Custom user
CREATE ROLE my_app_user WITH LOGIN PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE payloadkit_dev TO my_app_user;
```

### Custom Environment Variables

```yaml
# docker-compose.yml
services:
  app:
    environment:
      - CUSTOM_API_KEY=${CUSTOM_API_KEY}
      - FEATURE_FLAG_X=${FEATURE_FLAG_X:-false}
```

## 🔍 Troubleshooting

### Problem: Port 5432 already in use
```bash
# Change PostgreSQL port
# docker-compose.yml
ports:
  - '5433:5432'  # Different local port
```

### Problem: Corrupted volumes
```bash
# Complete reset
npm run docker:reset

# Or manually
docker-compose down -v
docker system prune
```

### Problem: Build fails
```bash
# Check logs
docker-compose logs app

# Rebuild without cache
docker-compose build --no-cache app
```

### Problem: Hot-reload not working
```bash
# Check volumes in docker-compose.yml
volumes:
  - .:/app              # Source code
  - /app/node_modules    # Exclude node_modules
  - /app/.next           # Exclude .next
```

## 📊 Monitoring and Health Checks

### Built-in Health Checks

All services include health checks:

```yaml
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U payloadkit"]
  interval: 10s
  timeout: 5s
  retries: 5
  start_period: 30s
```

### Status Verification

```bash
# Status of all services
docker-compose ps

# Real-time logs
docker-compose logs -f

# Specific service logs
docker-compose logs -f postgres
```

## 🎯 Development Workflows

### Local Development
```bash
1. npm run docker:dev          # Launch
2. Develop with hot-reload     # Code changes = auto-reload
3. npm run docker:logs         # Debugging
4. npm run docker:stop         # Clean stop
```

### Testing with Full Services
```bash
1. npm run docker:dev:full     # All services
2. Test emails on :8025        # MailHog
3. Manage DB via :5050         # pgAdmin
4. Redis caching :6379         # If configured
```

### Production Preparation
```bash
1. docker build --target runner -t my-app .
2. docker run --env-file .env.prod my-app
3. Test production image
4. Deploy to Dokploy/VPS
```

## 📚 Resources

- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL Docker](https://hub.docker.com/_/postgres)
- [Next.js Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing)

---

> 🚀 **Tip**: Use `npm run docker:dev` for daily development and `npm run docker:dev:full` when you need to test emails or manage the database!