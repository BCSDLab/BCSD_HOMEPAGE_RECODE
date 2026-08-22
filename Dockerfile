FROM node:22-alpine AS deps
WORKDIR /app
RUN npm install -g pnpm@10.14.0
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@10.14.0
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG INTERNAL_API_ORIGIN
ENV INTERNAL_API_ORIGIN=$INTERNAL_API_ORIGIN
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
