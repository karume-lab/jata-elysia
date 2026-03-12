# Use Node.js for the build stage
FROM imbios/bun-node:latest-alpine AS builder

WORKDIR /app

# Copy lockfile and package.json
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Runner
FROM imbios/bun-node:latest-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=7860

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user (Hugging Face Spaces requirement for security)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy essential files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 7860

# Start the application
CMD ["bun", "run", "start"]
