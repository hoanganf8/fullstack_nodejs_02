# Authentication - Xác định

Kiểm tra user có tồn tại trong database hay không?

- md5, sha1 --> Mã hóa 1 chiều --> Không an toàn
- bcrypt --> Hàm băm (hash) --> An toàn

1. Truy vấn lấy user theo email
2. Lấy được hash password từ database
3. Đưa hash password và plain password (password từ input) vào hàm so sánh

Session-Based
==> Sau khi lấy được thông tin user -> Lưu vào session

Token-Based
==> Sau khi lấy được thông tin user -> Lưu vào token (JWT)

Nhược điểm nếu xác thực theo cách thủ công

- Xây dựng lâu
- Không đồng nhất (Mỗi ông viết 1 kiểu)
- Bảo mật
- Tích hợp đăng nhập qua mạng xã hội mất thời gian và khó cho người mới

Giải pháp: Dùng thư viện chuyên dụng (passport.js)

# Đăng nhập thông qua mạng xã hội

- Sử dụng thông tin của mạng xã hội để đăng nhập vào hệ thống web mà không cần sử dụng mật khẩu
- Phổ biến ở tất cả các web

Ví dụ: Đăng nhập với Google
Click vào nút "Đăng nhập với Google" => Redirect qua trang đăng nhập của Google ==> Người dùng đăng nhập => Chuyển hướng ngược lại về web (Callback URL) ==> Đi kèm authcode ==> Dựa vào authcode để lấy thông tin từ mạng xã hội đã đăng nhập => Insert vào database (Nếu trong database không tồn tại, nếu tồn tại lấy luôn thông tin trong database)

## Phân tích database

Bảng providers: Chứa thông tin các hình thức đăng nhập

- id
- name
- created_at
- updated_at

Bảng users: Chứa thông tin user đăng nhập

- id
- name
- email
- password
- provider_id
- created_at
- updated_at

1. Chức năng đăng ký tài khoản (Provider: email)

- Kiểm tra trong bảng providers có name là `email` hay không?
  => Không có ==> Insert provider mới có name là `email` sau đó lấy về provider_id
  => Có ==> Lấy provider_id

- Insert dữ liệu vào bảng users

2. Chức năng đăng nhập

- Truy vấn thêm provider_id

3. Chức năng đăng nhập thông qua mạng xã hội

- Lấy thông tin mạng xã hội
- Quay về bước 1
