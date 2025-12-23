# 🌍 Lango Project

> **Status:** 🚧 Work in Progress / CI/CD Integration Phase

Проект **Lango** — это современное Fullstack приложение с разделенной архитектурой (Client/Server), где качество кода контролируется автоматическими пайплайнами.

---

## Технологический стек

* **Frontend:** React + TypeScript + SCSS
* **Backend:** Node.js + Prisma
* **CI/CD:** GitHub Actions (Linter, Unit Tests, Build)
* **Infrastructure:** Arch Linux (Development Environment)

---

##  CI/CD Pipeline Status

В репозитории настроены два независимых пайплайна для проверки стабильности:

1.  **Client Pipeline (`client.yml`)**:
    * Linting (TS & SCSS)
    * Unit Testing (Vitest)
    * Production Build
2.  **Server Pipeline (`server.ci.yml`)**:
    * Prisma Validation
    * Build Check

---

##  Development

Для запуска проекта локально:

```bash
# Клонирование
git clone [https://github.com/ResEmCode/Lango.git](https://github.com/ResEmCode/Lango.git)

# Установка зависимостей клиента
cd client && npm ci

# Установка зависимостей сервера
cd ../server && npm ci