---
layout: "../../layouts/MDLayout.astro"
title: "Autenticación"
description: "Documentación del módulo de autenticación de la API de Academia Deportiva."
lastUpdate: 2024-06-24
---


**Métodos:**

- **POST:** Iniciar sesión (login).
- **POST:** Registrar un nuevo usuario (register).

## Iniciar Sesión (Login)

**Método:** POST

**URI:** `/auth/login`

**Cuerpo de la solicitud:**

```json
{
	"username": "usuario",
	"password": "contraseña"
}
```

**Parámetros:**

- **username:** Nombre de usuario del usuario.
- **password:** Contraseña del usuario.

**Respuesta exitosa (200 OK):**

```json
{
	"token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiZXhwIjoxNjgzMzU0MjA2LCJpYXQiOjE2ODMzE4MjA2fQ.token"
}
```

**Campos de la respuesta:**

- **token:** Token JWT que permite al usuario acceder a las rutas protegidas de la API.

**Ejemplo de error (403 Forbidden):**

Debido a que la implementación de Spring Security no está completa, se devolverá un código de estado 403 Forbidden en los siguientes casos:

- **Credenciales inválidas:** Si el nombre de usuario o la contraseña son incorrectos.
- **Usuario no encontrado:** Si no se encuentra un usuario con el nombre de usuario proporcionado.

**Nota:** Un código de estado 403 Forbidden se devuelve sin cuerpo de respuesta.

## Registrar un nuevo usuario (Register)

**Método:** POST

**URI:** `/auth/register`

**Cuerpo de la solicitud:**

```json
{
	"username": "nuevo_usuario",
	"password": "contraseña"
}
```

**Parámetros:**

- **username:** Nombre de usuario del nuevo usuario.
- **password:** Contraseña del nuevo usuario.

**Respuesta exitosa (200 OK):**

```json
{
	"token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiZXhwIjoxNjgzMzU0MjA2LCJpYXQiOjE2ODMzE4MjA2fQ.token"
}
```

**Campos de la respuesta:**

- **token:** Token JWT que permite al nuevo usuario acceder a las rutas protegidas de la API.

**Ejemplo de error (403 Forbidden):**

Debido a que la implementación de Spring Security no está completa, se devolverá un código de estado 403 Forbidden en los siguientes casos:

- **Nombre de usuario ya existente:** Si ya existe un usuario con el nombre de usuario proporcionado.

**Nota:** Un código de estado 403 Forbidden se devuelve sin cuerpo de respuesta.
