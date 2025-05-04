import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPopularApps() {
  const { data, error } = await supabase
    .from('app')
    .select('id, name, description')
    .order('rating', { ascending: false })
    .limit(10);
    
  if (error) {
    console.error('Error fetching popular apps:', error);
    return [];
  }
  
  return data;
}
