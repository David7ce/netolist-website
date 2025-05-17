import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient.ts";

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return new Response(
      JSON.stringify({ message: "usuario no existe" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, { path: "/" });
  cookies.set("sb-refresh-token", refresh_token, { path: "/" });

  return new Response(
    JSON.stringify({ message: "usuario valido", redirect: "/dashboard" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};