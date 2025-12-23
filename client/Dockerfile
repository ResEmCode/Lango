#build stage
#latest node version
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY scripts ./scripts
RUN npm install

COPY . .

RUN npm run build


FROM alpine:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist





