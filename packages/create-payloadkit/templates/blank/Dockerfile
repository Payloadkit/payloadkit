# PayloadKit Development Dockerfile
# Multi-stage Docker setup optimized for PayloadCMS + Next.js development with bun

FROM oven/bun:1-alpine AS base
WORKDIR /app

# Install system dependencies for PayloadCMS
RUN apk update && apk upgrade && apk add --no-cache \
    netcat-openbsd \
    libc6-compat \
    python3 \
    make \
    g++

# Stage: Dependencies installation
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Stage: Development environment
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY package.json bun.lockb* ./
COPY . .

# Set development environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose Next.js development port
EXPOSE 3000

# Health check for development
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD nc -z localhost 3000 || exit 1

# Start development server
CMD ["bun", "run", "dev"]

# Stage: Production build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build environment variables (compatible with Dokploy)
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PHASE=phase-production-build
ENV PAYLOAD_DISABLE_ADMIN=true
ENV SKIP_ENV_VALIDATION=true

# Dummy environment variables for build (compatible with DATABASE_BUILD_URI logic)
ENV PAYLOAD_SECRET="build-time-secret"
ENV DATABASE_URI="postgresql://dummy:dummy@localhost:5432/dummy"
ENV SMTP_HOST="localhost"
ENV SMTP_PORT="587"
ENV SMTP_USER="dummy"
ENV SMTP_PASS="dummy"

# PayloadCMS needs node for tsx compatibility during build
ENV PATH="/usr/local/bin:$PATH"
RUN apk add --no-cache nodejs npm && \
    npm install -g tsx && \
    bunx payload generate:types && \
    bunx payload generate:importmap && \
    bun run build

# Stage: Production runtime
FROM oven/bun:1-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Install runtime dependencies and create user
RUN apk add --no-cache netcat-openbsd && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Create and configure .next directory
RUN mkdir .next && chown nextjs:nodejs .next

# Copy Next.js build output (works with or without standalone)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 2>/dev/null || true
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Fallback: copy full .next directory if standalone is not available
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Health check for production
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD nc -z localhost 3000 || exit 1

USER nextjs
EXPOSE 3000

# Use Next.js start command (compatible with both standalone and regular builds)
CMD ["bun", "run", "start"]