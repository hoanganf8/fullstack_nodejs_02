-- GROUP BY
-- HAVING
-- COUNT(), SUM(), AVG(), MAX(), MIN()
-- SELECT COUNT(id), status FROM users GROUP BY status;

-- Câu 1: Hiển thị danh sách users và số lượng bài posts của từng user
-- SELECT * FROM users;
-- select posts.user_id,count(title) from posts group by user_id;
-- select users.*,sub.count from users
-- left join 
-- 	(select posts.user_id,count(title) from posts group by user_id) as sub
-- on sub.user_id=users.id;

-- Câu 2: Trả về danh sách các users có số bài viết >=2

SELECT COUNT(posts.id) as posts_count,
	users.*
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.id
-- HAVING COUNT(posts.id) >= 2
ORDER BY posts_count DESC
LIMIT 1;



-- SELECT users.*, (SELECT count(id) FROM posts WHERE posts.user_id = users.id) AS post_count
-- FROM users;

-- Câu 3: Hiển thị thông tin user có số bài viết lớn nhất
SELECT COUNT(posts.id) as posts_count,
	users.*
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.id
HAVING COUNT(posts.id) = (
	SELECT MAX(post_count) 
	FROM (
		SELECT COUNT(id) as post_count
		FROM posts
		GROUP BY user_id
	)
)

