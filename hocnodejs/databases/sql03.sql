-- Truy vấn
-- SELECT id, name AS fullname, email, status FROM users;

-- JOIN
-- 1. INNER JOIN
-- 2. LEFT JOIN
-- 3. RIGHT JOIN

-- SELECT users.*, groups.name as group_name FROM users 
-- INNER JOIN groups ON users.group_id=groups.id
-- WHERE groups.name = 'Administrator';

-- Sắp xếp
-- Limit, Offset
SELECT * FROM users ORDER BY created_at ASC, id DESC LIMIT 2 OFFSET 2;



