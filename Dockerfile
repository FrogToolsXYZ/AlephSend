FROM node:18-alpine as base-image

FROM base-image as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY . .
RUN apk add --no-cache python3 py3-pip make g++
RUN pnpm install --frozen-lockfile

RUN ls -lah

# Build
FROM base-image AS builder
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package.json .
COPY --from=dependencies /app/public ./public
COPY --from=dependencies /app/src ./src
COPY --from=dependencies /app/.eslintrc.js .
COPY --from=dependencies /app/.prettierrc .
COPY --from=dependencies /app/next.config.js .
COPY --from=dependencies /app/tsconfig.json .
COPY --from=dependencies /app/postcss.config.js .
COPY --from=dependencies /app/tailwind.config.js .

# Copy secrets
COPY --from=dependencies /app/.env.local .env.local

RUN ls -lah

RUN npm install -g pnpm
RUN pnpm run build

# Production image, copy all the files and run next
FROM base-image AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodeuser

RUN npm install -g pnpm

# Copy Build Files
COPY --from=builder --chown=nodeuser:nodejs /app/node_modules node_modules
COPY --from=builder --chown=nodeuser:nodejs /app/package.json package.json
COPY --from=builder --chown=nodeuser:nodejs /app/public public
COPY --from=builder --chown=nodeuser:nodejs /app/.next .next
COPY --from=builder --chown=nodeuser:nodejs /app/.eslintrc.js .eslintrc.js
COPY --from=builder --chown=nodeuser:nodejs /app/.prettierrc .prettierrc
COPY --from=builder --chown=nodeuser:nodejs /app/tsconfig.json tsconfig.json
COPY --from=builder --chown=nodeuser:nodejs /app/next.config.js next.config.js
COPY --from=builder --chown=nodeuser:nodejs /app/postcss.config.js postcss.config.js
COPY --from=builder --chown=nodeuser:nodejs /app/tailwind.config.js tailwind.config.js

# Copy secrets
COPY --from=builder --chown=nodeuser:nodejs /app/.env.local .env.local

USER nodeuser

EXPOSE 3000
ENV PORT 3000

CMD pnpm run start