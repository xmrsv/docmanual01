---
layout: "../../layouts/MDLayout.astro"
title: "Alumnos"
description: "Descripción"
lastUpdate: 2024-06-24
---

## API de Academia Deportiva - Módulo de Alumnos

Este módulo permite gestionar la información de los alumnos de la Academia Deportiva.

### Autenticación

La API utiliza JWT (JSON Web Tokens) para la autenticación. Para acceder a las rutas protegidas, se debe incluir un token JWT válido en la cabecera `Authorization` de la solicitud, con el formato `Bearer <token>`.

**Endpoints de autenticación:**

**URL Base:** `/auth`

- **Login:**
  - **Método:** POST
  - **Ruta:** `/auth/login`
  - **Descripción:** Permite a un usuario registrado obtener un token JWT.
  - **Cuerpo de la solicitud:** Objeto JSON con el nombre de usuario y contraseña.

  ```json
  {
   "username": "usuario",
   "password": "contraseña"
  }
  ```

  - **Respuesta exitosa (200 OK):** Objeto JSON con el token JWT.

  ```json
  {
   "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiZXhwIjoxNjgzMzU0MjA2LCJpYXQiOjE2ODMzE4MjA2fQ.token"
  }
  ```

- **Registro:**
  - **Método:** POST
  - **Ruta:** `/auth/register`
  - **Descripción:** Permite registrar un nuevo usuario.
  - **Cuerpo de la solicitud:** Objeto JSON con la información del nuevo usuario.

  ```json
  {
   "username": "nuevo_usuario",
   "password": "contraseña"
  }
  ```

  - **Respuesta exitosa (200 OK):** Objeto JSON con el token JWT del nuevo usuario.

  ```json
  {
   "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiZXhwIjoxNjgzMzU0MjA2LCJpYXQiOjE2ODMzE4MjA2fQ.token"
  }
  ```
