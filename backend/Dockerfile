FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /opt/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

FROM node:22-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN apk add --no-cache vips-dev
WORKDIR /opt/app
COPY --from=builder /opt/app ./
ENV NODE_ENV=production

EXPOSE 1337
CMD ["pnpm", "start"]
