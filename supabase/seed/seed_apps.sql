-- Sample apps for Dev category
insert into app (
  name, description, category_id, subcategory_id, os_compatibility,
  website, store_url, source_code_url, company_dev_name, license, rating, images
)
values
('Node.js', 'JavaScript runtime built on V8.', 
 '00000000-0000-0000-0000-000000000001', null,
 ARRAY['Windows', 'Linux', 'macOS'],
 'https://nodejs.org', null, 'https://github.com/nodejs/node',
 'OpenJS Foundation', 'MIT', 4.7,
 ARRAY['https://nodejs.org/static/images/logo.svg']
),

('Vite', 'Frontend tooling build tool.', 
 '00000000-0000-0000-0000-000000000001', null,
 ARRAY['Windows', 'Linux', 'macOS'],
 'https://vitejs.dev', null, 'https://github.com/vitejs/vite',
 'Evan You', 'MIT', 4.5,
 ARRAY['https://vitejs.dev/logo.svg']
);
