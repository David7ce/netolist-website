### 🧑‍💻 ¿Cómo ejecutar los scripts de Seeding?

1. **Asegúrate de tener los archivos JSON** (`categories.json` y `apps.json`) en el mismo directorio que los scripts.
2. **Instala las dependencias** necesarias:

   ```bash
   npm install @supabase/supabase-js uuid
   ```

3. **Ejecuta el primer script** para insertar las categorías y subcategorías:

   ```bash
   node seed-categories.js
   ```

4. **Ejecuta el segundo script** para insertar las apps:

   ```bash
   node seed-apps.js
   ```

---

### 🧑‍💻 ¿Cómo probarlo en Supabase?

1. Verifica en el panel de Supabase que las categorías, subcategorías y apps se han insertado correctamente en las tablas correspondientes.
2. Puedes usar la **Consola SQL de Supabase** para hacer consultas, por ejemplo:

   ```sql
   SELECT * FROM category;
   SELECT * FROM subcategory;
   SELECT * FROM app;
   ```

---

### 📌 Notas

- Si las subcategorías y apps están relacionadas, asegúrate de que las **subcategorías ya existan** antes de insertar las apps. Este flujo de trabajo asegura que las subcategorías estén presentes antes de que las apps sean insertadas.
- Si necesitas manejar errores más complejos, puedes añadir **manejadores de errores** más detallados o realizar operaciones en **transacciones**.

¿Te gustaría que adaptara este enfoque a otro tipo de base de datos o algún detalle más específico?
