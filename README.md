Frontend (React)
    ✅ Mantener todas las funcionalidades anteriores del catálogo y carrito de compras.
    ✅ Implementar un formulario de registro de usuarios.  (falta NOMBRE)
    ✅      Formulario con campos: nombre, email, checkbox de TyC y contraseña.

    ✅ Implementar un formulario de inicio de sesión.
    ✅      Formulario con campos: email y contraseña.

    Crear una interfaz para agregar nuevos productos al catálogo, incluyendo la subida de imágenes.
    Utilizar localStorage para mantener la sesión del usuario.
    Si el usuario no esta validado no puede acceder a su carrito.

Backend (Express)
    Desarrollar una API RESTful para manejar rutas de productos, usuarios y autenticación.
    Implementar endpoints para registro e inicio de sesión de usuarios.
    Crear endpoints para gestionar productos (CRUD).
    Utilizar Multer para manejar la subida de imágenes de productos.

Autenticación
    Implementar un sistema básico de autenticación (sin hashing de contraseñas o manejo de sesiones avanzado).
    Utilizar localStorage y el contextAPI de React en el frontend para mantener el estado de la sesión.

Base de Datos
    Utilizar una base de datos (por ejemplo, MongoDB) para almacenar información de usuarios y productos.

Funcionalidades específicas

Registro de usuarios:
- Formulario con campos: nombre, email, checkbox de TyC y contraseña.
Almacenar la información en la base de datos.

Inicio de sesión:
- Formulario con campos: email y contraseña.
Verificar credenciales contra la base de datos.
Almacenar información de sesión en localStorage.

Gestión de productos:
Crear una interfaz para agregar nuevos productos.
Implementar la subida de imágenes para los productos.
Permitir editar y eliminar productos existentes.
Carrito de compras:
Asociar el carrito al usuario logueado.
Proceso de compra:
Simular un proceso de checkout básico.
Registrar las compras en la base de datos.
Tecnologías a utilizar
Frontend: React, React Router, Fetch API
Backend: Express.js
Base de datos: MongoDB (con Mongoose)
Subida de archivos: Multer
Pasos sugeridos

Configurar el proyecto Express y conectarlo con MongoDB.
Implementar modelos de datos para usuarios y productos.
Crear rutas y controladores para la autenticación y gestión de productos.
Actualizar el frontend para incluir los nuevos formularios y funcionalidades.
Integrar el frontend con el nuevo backend mediante llamadas API.
Implementar la lógica de autenticación en el frontend usando localStorage.
Implementar Multer para la subida de imágenes.

Retos adicionales (opcionales)
Implementar un sistema de búsqueda y filtrado avanzado para los productos.
Permitir guardar el carrito en la base de datos.
Deploy en Vercel




















__________________________________________________
# Actividad: Catalogo con Carrito de Compras

Deberán crear una aplicación web de un catálogo con carrito de compras utilizando React. Esta aplicación debe incorporar los siguientes conceptos y tecnologías:

- useState para manejar el estado local de los componentes
- useEffect para efectos secundarios, como la carga de datos
- useContext para manejar el estado global de la aplicación
- React Router DOM para la navegación entre páginas
- Fetch de datos desde un archivo JSON estático (ya que aún no hemos visto backend)

## Requisitos del proyecto:

- Página de selector de productos
- Página de detalle de producto
- Página de carrito de compras
- Página de checkout
- Layout de toda la web
- Carrito de compras
- Barra de navegación
- Uso de contexto para manejar el estado del carrito
- Carga de datos desde un archivo JSON
- Página de error en caso de ruta no encontrada
- Aun que la lógica de un catalogo es similar para todos los proyectos, se espera que cada estudiante proponga un tema o enfoque original para su catálogo, modificando no solo su estética si no también sus funcionalidades y contenido.

## Lista de ideas originales para catálogos:

- Alquiler de Superhéroes: Un servicio donde puedes "contratar" a un superhéroe para resolver problemas cotidianos.
- Menu de restaurante interactivo: EL usuario pide su plato con una interfaz tipo tablet.
- Refri inteligente: Interfaz minimalista para llevar el control de los alimentos en tu refrigerador, y hacer las compras en directo. Se puede elegir el mercado.
- PowerUps dentro de un videojuego: Interfaz en un juego para mejorar tu personaje.
- Tienda de Pociones mágicas: Un catálogo de filtros mágicos con diferentes efectos y duraciones.
- Catálogo de Mascotas Alienígenas: Una tienda intergaláctica de criaturas exóticas de otros planetas.
- Rutina de Gimnasio: Una aplicación que te ayuda a armar una rutina de ejercicios personalizada, a cambio de creditos de gimnasio.

En general sin importar el concepto todas deberan tener:

- una lista de items (productos, platos, personajes, planetas, herramientas).
- un mecanismo para agregar items a un carrito o inventario.
- beneficiarse de un sistema de categorías o filtros.
- una forma de ver el contenido del carrito y hacer ajustes.
- Todas pueden implementar un proceso de "checkout" o finalización.



# Instalación:
- npm create vite@latest . -- --template react
- (enter)
- npm i react-router-dom
- npm run dev

# Crear carpetas:
- components
- css
- lib
- pages