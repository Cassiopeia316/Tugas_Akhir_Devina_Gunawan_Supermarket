INSERT INTO "shelf_locations"(id, code, floor, aisle, position, row) VALUES
(gen_random_uuid(), 'A', 1, 1, 'left'::enumshelflocation, 1),
(gen_random_uuid(), 'B', 1, 1, 'right'::enumshelflocation, 1),
(gen_random_uuid(), 'C', 2, 5, 'left'::enumshelflocation, 2);
