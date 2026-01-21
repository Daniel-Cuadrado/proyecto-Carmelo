# Mi Proyecto SPA con React - Sesión 1

Este es el proyecto que he desarrollado para la actividad de "Desarrollo de aplicación SPA con React". El objetivo principal ha sido crear una estructura base sólida y configurar la navegación sin recargas usando React.

## 🚀 Cómo ejecutar mi proyecto

Para probar lo que he hecho, sigue estos pasos:

1.  **Instalar las dependencias**:
    Abre la terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Arrancar la aplicación**:
    Una vez instaladado todo, lanza el servidor con:
    ```bash
    npm run dev
    ```
    Y abre la URL que aparece (normalmente `http://localhost:5173`).

## 📝 Explicación del Código

He organizado el proyecto siguiendo las buenas prácticas de arquitectura por componentes que vimos en clase:

### Estructura de Carpetas (`src/`)
He dividido el código en carpetas lógicas para tenerlo todo ordenado:
*   **`pages/`**: Aquí he puesto mis vistas. Por ahora tengo `Home.jsx` (la portada) y `Login.jsx` (para acceder), tal como pedía el ejercicio.
*   **`router/`**: De momento está vacía, pero aquí pondré la configuración de rutas más compleja más adelante.
*   **`services/`**: Aquí irá la lógica para llamar a APIs externas (usando Axios).
*   **`store/`**: Esta carpeta la he creado para gestionar el estado global de la app en las siguientes sesiones.

### Routing y Navegación (`App.jsx`)
En el archivo principal `App.jsx` es donde he configurado todo el "esqueleto" de la navegación:
*   He usado **`BrowserRouter`** para envolver la aplicación y habilitar el sistema de rutas.
*   He creado un menú de navegación `nav` usando el componente **`Link`** de `react-router-dom`. Esto es clave porque permite cambiar entre Home y Login sin que la página se recargue entera (el comportamiento SPA).
*   Con **`Routes`** y **`Route`** defino qué componente se carga en cada URL (`/` y `/login`).

## 🛠️ Qué he utilizado
*   **Vite**: Para crear el proyecto rápido.
*   **React Router DOM**: Para toda la navegación SPA.
*   **Axios**: Ya lo he dejado instalado para cuando tenga que conectar con la API.
