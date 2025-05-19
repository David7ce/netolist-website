import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient.ts";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  // const name = formData.get("username")?.toString();

  if (!email || !password) {
    return new Response("All fields are required", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  // If you want to insert username, use a trigger to directly add a row in "user_profile" table

  // const { error: profileError } = await supabase.from("user_profile").insert([
  //   { id: data.user.id, },
  // ]);

  // if (profileError) {
  //   return new Response(profileError.message, { status: 500 });
  // }

  return redirect("/sign-in");
};
