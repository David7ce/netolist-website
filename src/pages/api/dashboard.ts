// import type { APIRoute } from "astro";
// import { supabase } from "../../config/supabaseClient.ts";

// export const GET: APIRoute = async ({ cookies, redirect }) => {
//   const accessToken = cookies.get("sb-access-token")?.value;

//   if (!accessToken) {
//     return redirect("/signin");
//   }

//   const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);

//   if (userError || !userData?.user) {
//     cookies.delete("sb-access-token", { path: "/" });
//     cookies.delete("sb-refresh-token", { path: "/" });
//     return redirect("/signin");
//   }

//   // Ahora buscar el perfil
//   const { data: profileData, error: profileError } = await supabase
//     .from("user_profile")
//     .select("username")
//     .eq("id", userData.user.id)
//     .single();

//   if (profileError) {
//     console.error("Error loading profile:", profileError.message);
//   }

//   return new Response(
//     JSON.stringify({
//       message: "Welcome to the protected dashboard",
//       user: {
//         id: userData.user.id,
//         email: userData.user.email,
//         username: profileData?.username || null,
//       },
//     }),
//     {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     }
//   );
// };
