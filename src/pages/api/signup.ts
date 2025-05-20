import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient.ts";

function generateUsername(email: string): string {
  const localPart = email.split("@")[0];
  const randomNumber = Math.floor(100 + Math.random() * 900); // 3 dígitos
  return `user_${localPart}_${randomNumber}`;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const usernameInput = formData.get("username")?.toString();

  if (!email || !password) {
    return new Response("All fields are required", { status: 400 });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const userId = data.user?.id;
  if (!userId) {
    return new Response("User registration failed", { status: 500 });
  }

  const username = usernameInput?.trim() || generateUsername(email);

  // There are two ways to create a row in the "user_profile" table:
  // 1. Use a trigger to automatically create a row when a new user is created
  // 2. Insert the row manually after user creation
  // Here we are using the second method
  const { error: profileError } = await supabase
    .from("user_profile")
    .insert([{ id: userId, username }]);

  if (profileError) {
    return new Response(profileError.message, { status: 500 });
  }

  return redirect("/sign-in");
};
