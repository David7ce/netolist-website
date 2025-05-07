import { supabase } from "../config/supabaseClient";

export async function getPopularApps() {
  const { data, error } = await supabase
    .from("app")
    .select("id, name, description")
    .order("rating", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching popular apps:", error.message);
    return [];
  }

  return data;
}
