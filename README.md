# 🧩 NetoList

Clon minimalista de [AlternativeTo.net](https://alternativeto.net), desarrollado con **Astro JS** y **Supabase**.

A diferencia de AlternativeTo, este proyecto prioriza la calidad sobre la cantidad: solo se incluye software conocido, útil y con disponibilidad activa. El enfoque está en ofrecer una experiencia clara, concisa y bien categorizada.

---

## 🔵 Páginas principales

- `/` – **Home**:  
  - Header: logo, menú, buscador, opciones  
  - Main: apps populares, recomendaciones del equipo, categorías destacadas  
  - Footer: copyright, privacy, FAQ, About

- `/browse-all` – Listado general de categorías + apps compatibles por sistema operativo  
- `/category/[nombre]` – Subcategorías de la categoría seleccionada  
- `/app/[nombre]` – Ficha detallada de cada app
- `/community` – Lista de usuarios registrados
- `/user/[nombre]` – Perfil público con reviews, favoritos y listas  
- `/user/[nombre]/lists` – Listado de apps creado por usuarios
- `/user/[nombre]/favs` – Listado de apps creado por usuarios

---

## 🔧 Funcionalidades

- Añadir apps (por ahora desde la base de datos manualmente)
- Usuarios registrados pueden:
  - Escribir reseñas con nota  (review)
  - Dar "me gusta" que añade a favoritos (likes)
  - Crear listados de pps
  - Exportar listas de favoritos o listas personalizadas (JSON/CSV)

---

## 🗃️ Modelo de Base de Datos (Supabase)

Supabase desplegado online, basado en PostgresSQL.

---

## 🎨 Estilos

Estilos con Tailwind y algún CSS externo básico con clases semánticas bien organizadas.

---

## ⚙️ Stack Técnico

- **Frontend:** Astro JS + HTML/CSS
- **Backend:** Supabase (PostgreSQL, Auth)
- **Despliegue:** (añadir si usas Vercel, Netlify o similar)

---

## 💡 Futuras mejoras (roadmap)

- Añadir panel de administración para gestionar apps y categorías
- Autocompletado en el buscador
- Sistema de votación y moderación para sugerencias de apps
- Compatibilidad móvil optimizada

---

## 🛠️ Estado del Proyecto

🚧 En desarrollo inicial. Algunas funcionalidades pueden estar incompletas o sujetas a cambios.

---
