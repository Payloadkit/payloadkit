# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy all project files (since we're in a monorepo)
COPY . .

# Install dependencies from root
RUN bun install

# Build docs
WORKDIR /app/apps/docs
RUN bun run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/apps/docs/out /usr/share/nginx/html

# Copy nginx config
COPY --from=builder /app/apps/docs/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]