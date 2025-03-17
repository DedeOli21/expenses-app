FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

RUN yarn install --production --frozen-lockfile && yarn cache clean

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

RUN apk add --no-cache openssl

EXPOSE 3000

CMD ["node", "dist/main.js"]
