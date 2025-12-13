#build stage
#latest node version
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY scripts ./scripts
RUN npm install

COPY . .

RUN npm run build

FROM fholzer/nginx-brotli:latest

COPY ../infra/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80



