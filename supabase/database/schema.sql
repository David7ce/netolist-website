-- Enable pgcrypto for UUIDs
create extension if not exists "pgcrypto";

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
  rating float,
  images text[]
);

-- Users table (minimal)
create table user_profile (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  username text,
  password_hash text
);
