-- Comment trong SQL

-- Thêm dữ liệu
-- INSERT INTO 
-- users(id, name, email, password, status, created_at, updated_at) 
-- VALUES (4, 'User 4', 'user4@gmail.com', '123456', true, NOW(), NOW());

-- INSERT INTO 
-- users(id, name, email, password, status, created_at, updated_at) 
-- VALUES (5, 'User 5', 'user5@gmail.com', '123456', false, NOW(), NOW());

-- INSERT INTO 
-- users(id, name, email, password, status, created_at, updated_at) 
-- VALUES (6, 'User 6', 'user6@gmail.com', '123456', false, NOW(), NOW());

-- Cập nhật dữ liệu
-- UPDATE users SET updated_at=NULL WHERE id=1;
-- UPDATE users SET updated_at=NULL WHERE id=3;

-- Xóa dữ liệu
-- DELETE FROM users WHERE id=1;

-- Hiển thị danh sách
SELECT * FROM users WHERE updated_at IS NOT NULL;



