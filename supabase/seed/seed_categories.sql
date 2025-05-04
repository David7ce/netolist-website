-- Sample seed for categories
insert into category (id, name) values
('00000000-0000-0000-0000-000000000001', 'Dev'),
('00000000-0000-0000-0000-000000000002', 'MediaAudio');

-- Subcategories for Dev
insert into subcategory (name, category_id) values
('AI chatbot', '00000000-0000-0000-0000-000000000001'),
('Web scrapper', '00000000-0000-0000-0000-000000000001'),
('JS runtime', '00000000-0000-0000-0000-000000000001');

-- Subcategories for MediaAudio
insert into subcategory (name, category_id) values
('Audio player', '00000000-0000-0000-0000-000000000002'),
('Music app', '00000000-0000-0000-0000-000000000002'),
('Audio editor', '00000000-0000-0000-0000-000000000002');
