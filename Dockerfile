FROM node:18-alpine AS base

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]
