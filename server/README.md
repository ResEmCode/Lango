# 🚢 Lango API

Lango API — это RESTful API для управления и отслеживания пользовательских данных, событий или объектов. Ниже представлены доступные запросы, их описание и примеры использования.

---

## 📡 Запросы

<details>

<summary> 👤 Пользователь (User) </summary>

### 🙎‍♂️ Зарегистрировать пользователя

**POST** `/auth/register`  
**Описание:** Возвращает access токен зарегистрированного пользователя.

**Пример:**

```http
POST /auth/register HTTP/1.1
Host: localhost:4000
Authorization: No
Url: http://localhost:3000/auth/register

body:
{
  "email": "user@mail.ru",
  "username": "user1",
  "password": "user123",
  "avatar": "http://..."
}

```

**Ответ**

```Js
    accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1lb3cgVXNlciIsImlhdCI6MTY5Njc3MjAwMH0.4fT3x9zQvKJ7GvYbX9aZ8WvQkL2ePzF1zJk9aBvRk3xA
```

> Устанавливает в coockie пользователя **refresh** token

&nbsp;

### 🙎‍♂️ Авторизоваться как пользователяь (User)

**POST** `/auth/login`

**Описание:** Возвращает access токен авторизованного пользователя.

**Пример:**

```http
POST /auth/login HTTP/1.1
Host: localhost:4000
Authorization: No
Url: http://localhost:3000/auth/login

body:
{
  email: "user@mail.ru",
  password: "user123"
}
```

**Ответ**

```Js
    accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1lb3cgVXNlciIsImlhdCI6MTY5Njc3MjAwMH0.4fT3x9zQvKJ7GvYbX9aZ8WvQkL2ePzF1zJk9aBvRk3xA
```

> Устанавливает в coockie пользователя **refresh** token

&nbsp;

### 🔍 Инициализация пользователя по acess токену🔒

**GET** `/auth/me`

**Описание:** Возвращает необходимые даные пользлователя

**Пример:**

```http
POST /auth/me HTTP/1.1
Host: localhost:4000
Authorization: Acess Token
Url: http://localhost:3000/auth/me
```

**Ответ**

```Json
{
  "id": "d3d380f0-3362-4be5-8e9e-da671a55648a",
  "username": "user1",
}
```

</details>
