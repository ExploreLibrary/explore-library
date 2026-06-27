# Explore Library

Explore Library es una aplicación React para explorar libros, ver detalles, buscar libros y gestionar favoritos.

La aplicación usa OpenLibrary para obtener información de libros y MSW (Mock Service Worker) para simular la API de autenticación de usuarios.

## Características

- Página principal con galerías de libros por temas.
- Página de detalles de libro con datos extendidos.
- Búsqueda de libros en `/search/:query`.
- Registro e inicio de sesión de usuario.
- Perfil privado en `/profile` con favoritos del usuario.
- Favoritos persistentes en `localStorage`.

## Rutas principales

- `/` — Home con galerías de libros.
- `/login` — Pantalla de login.
- `/register` — Pantalla de registro.
- `/profile` — Perfil privado del usuario.
- `/book-detail/:isbn` — Detalle de un libro.
- `/search/:query` — Resultados de búsqueda.

## Cómo ejecutar

1. Abre la carpeta del proyecto.
2. Instala las dependencias:
   `npm install`
3. Inicia el servidor de desarrollo:
   `npm run dev`
4. Abre el enlace que muestre Vite en el navegador.

## Detalles de implementación

- `src/main.jsx` inicia MSW antes de renderizar la app.
- `src/contexts/auth-context.jsx` guarda el usuario en `localStorage` bajo `current-user`.
- `src/services/books-service.js` consume el proxy de Vite hacia OpenLibrary en `/api-openlibrary`.
- `src/services/auth-service.js` llama a la API simulada en `https://api.openlibrary.mock.org`.
- `src/mock/index.js` maneja registro, login y actualización de favoritos.

## Estructura del proyecto

- `src/components` — componentes UI reutilizables.
- `src/pages` — pantallas completas.
- `src/contexts` — contexto de autenticación.
- `src/services` — lógica de comunicación con APIs.
- `src/mock` — mocking del backend de auth.
- `vite.config.js` — proxy `/api-openlibrary` a `https://openlibrary.org`.


