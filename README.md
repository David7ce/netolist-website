# 🧩 AlternativeLite

Clon minimalista de [AlternativeTo.net](https://alternativeto.net), desarrollado con **Astro JS** y **Supabase**.

A diferencia de AlternativeTo, este proyecto prioriza la calidad sobre la cantidad: solo se incluye software conocido, útil y con disponibilidad activa. El enfoque está en ofrecer una experiencia clara, concisa y bien categorizada.

---

## 🌐 Páginas principales

- `/` – **Home**:  
  - Header: logo, menú, buscador, opciones  
  - Main: apps populares, recomendaciones del equipo, categorías destacadas  
  - Footer

- `/categories` – Listado general de categorías + apps compatibles por sistema operativo  
- `/category/[nombre]` – Subcategorías de la categoría seleccionada  
- `/app/[nombre]` – Ficha detallada de cada app  
- `/community` – Lista de usuarios registrados  
- `/user/[nombre]` – Perfil público con reviews, favoritos y listas  
- `/suggest/app` – Formulario para proponer una app nueva

---

## 🔧 Funcionalidades

- Añadir apps (por ahora desde la base de datos manualmente)
- Usuarios registrados pueden:
  - Valorar apps (rating)
  - Escribir reseñas (review)
  - Añadir favoritos (likes)
  - Crear y exportar listas personalizadas (JSON/CSV)

---

## 🗃️ Modelo de Base de Datos (Supabase)

```sql
user (
  id,
  email,
  name,
  password
)

app (
  id,
  name,
  description,
  type_app (FK → category),
  os_compatibility,
  link_website,
  link_store,
  link_source_code,
  company_dev_name,
  licensing,
  rating,
  images[]
)

category (
  id,
  name,
  subcategory[]
)
```

---

## 🎨 Estilo

CSS externo básico con clases semánticas bien organizadas en el HTML para facilitar el mantenimiento y futuras mejoras.

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

## 📄 Licencia

MIT (o lo que vayas a usar)
