# Swagger API Documentation

## Descripción

Este proyecto utiliza **Swagger** para documentar y explorar las API del sistema. Swagger proporciona una interfaz interactiva para probar los endpoints, visualizar las solicitudes y respuestas, y comprender mejor la funcionalidad de la API.

## ⚙️ Configuración de Servidores Dinámicos

La configuración de los servidores en Swagger utiliza 
variables dinámicas que se definen en el archivo `.
env`. Esto permite adaptar fácilmente el 
comportamiento del servidor según el entorno.

### Variables disponibles

- **`BASE_URL`**: Define la URL base del servidor (por 
defecto: `http://localhost`).
- **`PORT`**: Especifica el puerto del servidor (por 
defecto: `3001`).
- **`BASE_PATH`**: Indica la ruta base de la API (por 
defecto: `api`).
- **`VERSIONS_API`**: Lista de versiones disponibles 
de la API, separadas por comas (por defecto: `v1`).

Consulta el archivo `.env.example` para ver un ejemplo 
completo de cómo configurar estas variables.

```bash
# Configuración de Swagger Server
BASE_PATH=api
VERSIONS_API=v1
BASE_URL=http://localhost
PORT=3001
```

## Acceso a la documentación

Una vez que el backend esté en ejecución, puedes acceder a la documentación de Swagger.

### Ejecuta el servidor con el siguiente comando:

```bash
npm run dev
```
### Al iniciar, se mostrará en la consola:

```bash
==================================================
🚀 Servidor corriendo en: http://localhost:3001   
📃 Swagger Docs: http://localhost:3001/api-docs   
==================================================
```

## 📖 ¿Qué puedes hacer en Swagger?

- **Explorar endpoints**: Descubre las rutas disponibles en la API, sus métodos y parámetros requeridos.
- **Probar la API**: Envía solicitudes directamente desde la interfaz de Swagger.
- **Ver respuestas esperadas**: Consulta ejemplos y códigos de estado para cada endpoint.

## **Estructura de Swagger**

```bash
swagger/
    v1/
        components/
            schemas/
                categories/
                products/
                user/
            securitySchemes/
        paths/
            categories/
            products/
            user/
    info.js
    main.js
    README.md
    server.js
    swaggerSpec.js
```