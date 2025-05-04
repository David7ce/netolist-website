import { createClient } from '@supabase/supabase-js';
import categories from './categories.json';
import subcategories from './subcategories.json';
import apps from './apps.json';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // use SERVICE ROLE KEY
);

async function seed() {
  for (const cat of categories) {
    await supabase.from('category').insert([{ name: cat.name }]);
  }

  for (const sub of subcategories) {
    const { data: category } = await supabase
      .from('category')
      .select('id')
      .eq('name', sub.category)
      .single();

    await supabase.from('subcategory').insert([{
      name: sub.name,
      category_id: category.id
    }]);
  }

  for (const app of apps) {
    const { data: category } = await supabase
      .from('category')
      .select('id')
      .eq('name', app.category)
      .single();

    const { data: subcategory } = await supabase
      .from('subcategory')
      .select('id')
      .eq('name', app.subcategory)
      .single();

    await supabase.from('app').insert([{
      name: app.name,
      description: app.description,
      category_id: category.id,
      subcategory_id: subcategory.id,
      os_compatibility: app.os_compatibility,
      website: app.website,
      license: app.license,
      rating: app.rating
    }]);
  }

  console.log('Seed complete!');
}

seed();
