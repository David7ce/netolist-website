-- Enable pgcrypto for UUIDs
create extension if not exists "pgcrypto";

-- Users table (minimal)
create table user_profile (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique not null
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table public.admin_users (
  user_id uuid primary key references user_profile(id) on delete cascade,
  is_super boolean default false
);

create table public.favs (
  user_id uuid references user_profile(id) on delete cascade,
  app_id uuid references app(id) on delete cascade,
  liked_at timestamp with time zone default timezone('utc'::text, now())
  primary key (user_id, app_id)
);

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profile(id) on delete cascade,
  app_id uuid references app(id) on delete cascade,
  rating smallint check (rating between 0 and 10),
  comment text,
  created_at timestamp default now()
);

create table public.lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profile(id) on delete cascade,
  name text not null,
  description text,
  is_public boolean default false,
  created_at timestamp default now()
);

create table public.list_items (
  list_id uuid references lists(id) on delete cascade,
  app_id uuid references app(id) on delete cascade,
  added_at timestamp default now(),
  primary key (list_id, app_id)
);

-- Apps table
create table app (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  category_id uuid references category(id),
  subcategory_id uuid references subcategory(id),
  os_compatibility text[],
  website text,
  store_url text,
  source_code_url text,
  company_dev_name text,
  license text,
  rating numeric(3,2)
  images text[]
);

-- Categories table
create table category (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

-- Subcategories table
create table subcategory (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category_id uuid references category(id) on delete cascade
);
