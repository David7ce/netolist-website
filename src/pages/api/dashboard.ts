import type { APIRoute } from "astro";
import { supabase } from "../../config/supabaseClient.ts";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const accessToken = cookies.get("sb-access-token")?.value;

  if (!accessToken) {
    return redirect("/signin");
  }

  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data?.user) {
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });
    return redirect("/signin");
  }

  return new Response(
    JSON.stringify({
      message: "Welcome to the protected dashboard",
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
