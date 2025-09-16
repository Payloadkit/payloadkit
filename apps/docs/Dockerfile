# PayloadKit Docs Dockerfile - Static build for Dokploy
FROM oven/bun:1-alpine AS base
WORKDIR /app

# Install system dependencies
RUN apk update && apk upgrade && apk add --no-cache libc6-compat

# Stage: Dependencies installation
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Stage: Build docs
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PATH="/app/node_modules/.bin:$PATH"

# Build docs using explicit path to next
RUN cd apps/docs && ../node_modules/.bin/next build

# Stage: Static file server
FROM oven/bun:1-alpine AS runner
WORKDIR /app

# Install serve globally for static file serving
RUN bun add -g serve

# Copy built static files
COPY --from=builder /app/apps/docs/out ./public

# Expose port for Dokploy
EXPOSE 3000

# Serve static files (Traefik will handle reverse proxy)
CMD ["serve", "-s", "public", "-l", "3000"]