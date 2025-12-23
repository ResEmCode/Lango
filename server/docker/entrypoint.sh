#!/bin/sh
set -e

echo "[DEBUG] Waiting for postgres (sleeping 5s)..."
sleep 5

echo "[DEBUG] Start prisma migration"
npx prisma migrate deploy

echo "[DEBUG] Starting application..."
exec node dist/src/main.js