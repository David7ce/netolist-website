import { supabase } from "../config/supabaseClient";

// Obtener las apps más populares (independientemente de la categoría)
export async function getTopApps(limit = 10) {
  const { data, error } = await supabase
    .from("app")
    .select("id, name, description, logo, slug, likes")
    .order("likes", { ascending: false }) // Ordenar por likes de mayor a menor
    .limit(limit); // Limitar el número de resultados

  if (error) {
    console.error("Error fetching top apps:", error.message);
    return [];
  }

  return data;
}

// Obtener las apps populares de una categoría específica
export async function getPopularAppsByCategory(category) {
  const { data, error } = await supabase
    .from("app")
    .select("id, name, description, logo, slug, likes")
    .eq("category", category)
    .order("likes", { ascending: false }) // Ordenar por likes de mayor a menor
    .limit(10);

  if (error) {
    console.error(`Error fetching popular apps for category "${category}":`, error.message);
    return [];
  }

  return data;
}

// Obtener las subcategorías de una categoría con sus 5 apps principales
export async function getSubcategoriesWithTopApps(category) {
  const { data, error } = await supabase
    .from("subcategory")
    .select(`
      name,
      slug,
      topApps:app(id, name, slug, likes)
    `)
    .eq("category", category);

  if (error) {
    console.error(`Error fetching subcategories for category "${category}":`, error.message);
    return [];
  }

  return data.map(subcategory => ({
    ...subcategory,
    topApps: subcategory.topApps
      .sort((a, b) => b.likes - a.likes) // Ordenar las apps por likes de mayor a menor
      .slice(0, 5), // Limitar a las 5 apps principales
  }));
}