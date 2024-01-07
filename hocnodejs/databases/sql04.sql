-- Câu 1: Lấy danh sách user và số điện thoại của user đó
SELECT users.*, phones.phone FROM users
INNER JOIN phones
ON users.id = phones.user_id;

-- Câu 2: Lấy danh sách bài posts của users có id = 1. 
-- Yêu cầu trả về postId, title, content, username
SELECT posts.id, posts.title, posts.content, users.name as username 
FROM posts 
INNER JOIN users
ON posts.user_id = users.id
WHERE users.id=1;

-- Câu 3: Viết câu lệnh truy vấn lấy ra danh sách các khóa học mà user có id = 1 đã mua
-- Yêu cầu: Trả về thông tin khóa học và thông tin users: tên, email
-- Tạo 1 cột discount từ câu lệnh truy vấn, giá trị cột discount sẽ tính như sau
-- Nếu giá từ 400.000 trở lên hiển thị 10%, ngược lại hiển thị 0
-- Tạo 1 cột sale_price hiển thị giá tiền sau khi đã trừ discount
-- Trả về 1 bản ghi có giá lớn nhất
-- Trả về 1 bản ghi có giá lớn thứ hai
SELECT courses.*, users.name as username, users.email,
CASE
	WHEN courses.price >= 400000 THEN '10%'
	ELSE '0'
END AS discount,
(courses.price - courses.price * (CASE
	WHEN courses.price >= 400000 THEN 10
	ELSE 0
END) / 100) as sale_price
FROM courses
INNER JOIN users_courses
ON courses.id = users_courses.course_id
INNER JOIN users
ON users.id = users_courses.user_id
WHERE users.id = 1
ORDER BY courses.price DESC, courses.id ASC
LIMIT 1 OFFSET 1;

-- offset = (page - 1) * limit










