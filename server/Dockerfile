
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/


RUN npm ci && npx prisma generate

COPY . .


RUN npm run build && npm cache clean --force

FROM node:20-alpine

WORKDIR /app

COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/prisma ./prisma

USER node

EXPOSE 3000

CMD ["node", "dist/src/main"]