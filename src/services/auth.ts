import { supabase } from '../config/supabaseClient';
import type { Session, User } from '@supabase/supabase-js';

/**
 * Sign up a new user
 */
export async function signUp(email: string, password: string): Promise<{
  success: boolean;
  message?: string;
  user?: User;
}> {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  return data.user
    ? { success: true, user: data.user }
    : { success: true };
}

/**
 * Sign in an existing user
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
    session: data.session
  };
}

/**
 * Get the currently logged-in user
 */
export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error getting user:', error.message);
    return null;
  }

  return data.user;
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
  }
}
