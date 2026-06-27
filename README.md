# Explore Library

Explore Library es una aplicación para explorar libros, ver detalles y gestionar favoritos desde una interfaz sencilla.

## Qué puedes hacer

- Ver una lista de libros disponibles.
- Abrir la página de detalle de cada libro.
- Iniciar sesión o registrarte para guardar tu experiencia.
- Marcar o desmarcar libros como favoritos.
- Mantener tus favoritos en la sesión del navegador.

## Cómo empezar

1. Abre la carpeta del proyecto.
2. Instala las dependencias con:
   `npm install`
3. Inicia el servidor de desarrollo con:
   `npm run dev`
4. Abre el enlace que muestre Vite en tu navegador.

## Cómo navegar

- La pantalla principal muestra los libros en una galería.
- Cada libro tiene un botón para activar o desactivar el favorito.
- Desde un libro puedes ir a su página de detalle.
- Si estás identificado, tus favoritos se guardan y se muestran al recargar.

## Estructura principal

- `src/components`: piezas de interfaz reutilizables, como tarjetas de libros, barra de navegación y formularios.
- `src/pages`: pantallas completas de la aplicación, como inicio, detalles, login y registro.
- `src/contexts`: contexto de autenticación y manejo de usuario.
- `src/services`: lugar para la lógica que consulta libros o gestiona datos.

## Qué mejorar luego

- Añadir datos reales desde una API de libros.
- Mejorar el manejo de favoritos para que se sincronice con un servidor.
- Añadir validación en los formularios de login y registro.
- Crear una página de perfil con resumen de favoritos.
