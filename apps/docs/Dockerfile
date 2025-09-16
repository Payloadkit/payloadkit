# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy root package files
COPY ../../package.json ../../bun.lockb ./
COPY ../../packages ./packages

# Copy docs
COPY package.json ./apps/docs/
COPY . ./apps/docs/

# Install dependencies
RUN bun install

# Build docs
WORKDIR /app/apps/docs
RUN bun run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/apps/docs/out /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]