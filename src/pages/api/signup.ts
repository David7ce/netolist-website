// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient.ts";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response("All fields are required", { status: 400 });
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error || !data?.user) {
    return new Response(error?.message || "Sign up failed", { status: 500 });
  }

  // Insertar en 'profiles'
  const { error: profileError } = await supabase.from("profiles").insert([
    { id: data.user.id, name },
  ]);

  if (profileError) {
    return new Response(profileError.message, { status: 500 });
  }

  return redirect("/signin");
};
