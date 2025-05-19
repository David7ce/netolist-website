import { supabase } from "../config/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";

/**
 * Register a new user
 * @param name - User's name
 * @param email - User's email address
 * @param password - User's password
 */
export async function signUp(name: string, email: string, password: string): Promise<{
  success: boolean;
  message?: string;
  user?: User;
}> {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error || !data.user) {
    return { success: false, message: error?.message || "Sign up failed" };
  }

  const { error: profileError } = await supabase.from("profiles").insert([
    { id: data.user.id, name },
  ]);

  if (profileError) {
    return { success: false, message: profileError.message };
  }

  return { success: true, user: data.user };
}

/**
 * Log in a user
 * @param email - User's email address
 * @param password - User's password
 * @returns - An object containing success status, message, user, and session
 */
export async function signIn(email: string, password: string): Promise<{
  success: boolean;
  message?: string;
  user?: User;
  session?: Session;
}> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    user: data.user,
    session: data.session,
  };
}

/**
 * Sign out the current user
 * @returns - An object containing success status and message
 */
export async function signOut(): Promise<{ success: boolean; message?: string }> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true };
}

/**
 * Get the current user and their profile
 * @param accessToken - The access token of the user
 * @returns - An object containing the user and their profile name
 */
export async function getCurrentUserWithProfile(accessToken: string): Promise<{
  user: User | null;
  name: string | null;
}> {
  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data.user) {
    return { user: null, name: null };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", data.user.id)
    .single();

  return {
    user: data.user,
    name: profile?.name ?? null,
  };
}
