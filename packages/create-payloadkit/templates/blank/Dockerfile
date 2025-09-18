FROM oven/bun:1-alpine AS base
WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache \
    netcat-openbsd \
    libc6-compat

FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY package.json bun.lockb* ./
COPY . .
EXPOSE 3000
CMD ["bun", "run", "dev"]

# Stage build pour production
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PHASE=phase-production-build
ENV PAYLOAD_DISABLE_ADMIN=true
ENV SKIP_ENV_VALIDATION=true
ENV PAYLOAD_SECRET="build-time-secret"
ENV DATABASE_URI="postgresql://dummy:dummy@localhost:5432/dummy"
ENV SMTP_HOST="localhost"
ENV SMTP_PORT="587"
ENV SMTP_USER="dummy"
ENV SMTP_PASS="dummy"

# PayloadCMS needs node for tsx compatibility
ENV PATH="/usr/local/bin:$PATH"
RUN apk add --no-cache nodejs npm && \
    npm install -g tsx && \
    bunx payload generate:types && \
    bunx payload generate:importmap && \
    bun run build

# Stage production
FROM oven/bun:1-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN apk add --no-cache netcat-openbsd && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Création et configuration du répertoire .next
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["bun", "run", "start"]
