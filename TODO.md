# TODO

- Database:
  - [x] Crear base de datos en Supabase
  - [x] Linkear base de datos en la nube linkeada con clave API
  - [x] Hacer sembrado / seeding de apps con todos los datos
- Crear páginas:
  - [x] browse-all.astro
  - categories.astro con subcategorías y top 5 apps
  - subcategories.astro: info básica + menú con filtro + listado de componentes apps
    - filtro: OS-compatibility, Properties, Sort by (ranks, likes, views), Feature, License, Origin
    - vista de mosaico o lista, (mosaico por defecto)
  - about.astro: explicación de la web
  - app-x.astro:
  - [x] Authentication (sign-in.astro, sign-out.astro, sign-up.astro)
  - User info (index.astro, edit.astro, likes.astro, reviews.astro, lists.astro)

- Funcionalidad:
  - Crear likes de apps
  - Exportar CSV apps con likes
  - Reviews con nota / reseña
    - Crear listas de apps personalizadas
    - Añadir buscador en Home
    - Auth: login, logout, register
- CRUD de User, Reviews, Likes, Lists apps
- Opcional futuro: CRUD de apps solo para rol admin

- Estilos:
  - Modo claro y modo oscuro
  - Naming and logo de 'NetoList'
  - Iconos
  - Fix theme
