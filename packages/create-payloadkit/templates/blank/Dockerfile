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

# Set build environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PHASE=phase-production-build
ENV SKIP_ENV_VALIDATION=true

# Dummy environment variables for build (will be overridden at runtime)
ENV PAYLOAD_SECRET="build-time-secret-change-in-production"
ENV DATABASE_URI="postgresql://build:build@localhost:5432/build"
ENV SMTP_HOST="localhost"
ENV SMTP_PORT="587"
ENV SMTP_USER="build"
ENV SMTP_PASS="build"

# PayloadCMS needs node for tsx compatibility during build
ENV PATH="/usr/local/bin:$PATH"
RUN apk add --no-cache nodejs npm && \
    npm install -g tsx

# Generate PayloadCMS types and build
RUN bunx payload generate:types && \
    bunx payload generate:importmap && \
    bun run build

# Stage: Production runtime
FROM oven/bun:1-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Install runtime dependencies
RUN apk add --no-cache \
    netcat-openbsd \
    nodejs && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Set up Next.js standalone build
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Health check for production
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD nc -z localhost 3000 || exit 1

USER nextjs
EXPOSE 3000

CMD ["bun", "run", "start"]