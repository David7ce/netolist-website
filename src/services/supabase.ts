import { supabase } from "../config/supabaseClient.ts";

export interface App {
  id: string;
  name: string;
  description: string;
  logo: string;
  slug: string;
  likes: number;
  category?: string;
}

export interface SubcategoryWithApps {
  name: string;
  slug: string;
  topApps: App[];
}

/**
 * Obtener las apps más populares (independientemente de la categoría)
 */
export async function getTopApps(limit = 10): Promise<App[]> {
  const { data, error } = await supabase
    .from("app")
    .select("id, name, description, logo, slug, likes")
    .order("likes", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching top apps:", error.message);
    return [];
  }

  return data as App[];
}

/**
 * Obtener las apps populares de una categoría específica
 */
export async function getPopularAppsByCategory(category: string): Promise<App[]> {
  const { data, error } = await supabase
    .from("app")
    .select("id, name, description, logo, slug, likes")
    .eq("category", category)
    .order("likes", { ascending: false })
    .limit(10);

  if (error) {
    console.error(`Error fetching popular apps for category "${category}":`, error.message);
    return [];
  }

  return data as App[];
}

/**
 * Obtener las subcategorías de una categoría con sus 5 apps principales
 */
export async function getSubcategoriesWithTopApps(category: string): Promise<SubcategoryWithApps[]> {
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

  return (data as SubcategoryWithApps[]).map(subcategory => ({
    ...subcategory,
    topApps: subcategory.topApps
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 5),
  }));
}
