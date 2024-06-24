---
layout: "../../layouts/MDLayout.astro"
title: "Alumnos"
description: "Descripción"
lastUpdate: 2024-06-24
---

Modulo de alumnos

**Requiere autenticación: sí**, Necesitas adjutar el token como Autenticación Bearer Token para poder acceder a todos los endpoints de Alumnos

## Obtener alumnos

Has una petición simple usando el método GET al siguiente endpoint:

```api
/api/alumnos
```

## Obtener un alumno por id

Para obtener un alumno por id utiliza el método GET especificando el id en el endpoint, obtendremos el usuario con id 1 como ejemplo:

**Endpoint de alumno por id**

```api
/api/alumno/1
```