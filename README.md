# PilotX – Prueba Técnica Frontend

Aplicación desarrollada en **React** para visualizar posteos y permitir la interacción con comentarios utilizando la API pública de JSONPlaceholder.

---

## Funcionalidades

### 1. Página principal – Listado de posteos
- Muestra todos los posts obtenidos desde la API.
- Cada tarjeta enlaza al detalle del post.

### 2. Página de detalle – Comentarios
- Visualiza el contenido del post seleccionado.
- Lista los comentarios asociados.
- Permite agregar un nuevo comentario al estado local (simulación).
- Renderizado del nuevo comentario.

---

## Tecnologías utilizadas

- React + Vite  
- React Router DOM   
- TailwindCSS
- TypeScript


---

## API utilizada

**JSONPlaceholder**  
- Posts: `https://jsonplaceholder.typicode.com/posts`  
- Comments: `https://jsonplaceholder.typicode.com/comments?postId=ID`

---

## Cómo ejecutar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/chLuis/tec-pilotX.git

# Ingresar al proyecto
cd tec-pilotX

# Instalar dependencias
npm install

# Levantar entorno de desarrollo
npm run dev
```
---

## Demo
- [https://tec-pilot-x.vercel.app/](https://tec-pilot-x.vercel.app/)
