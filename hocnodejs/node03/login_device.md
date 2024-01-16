# Đăng nhập đa thiết bị

- Quản lý lịch sử và các thiết bị đăng nhập
- Trình duyệt không lấy được thiết bị --> Tips trick
- Khi login --> Tạo token --> Lưu database --> Đồng thời lưu cookie

Cách nhận biết thiết bị: token của cookie phải khớp token trên database

# Database

## users

- id
- name
- email
- password

## login_token

- id
- user_id
- token
- status
- last_login
- last_activity

# Luồng

## Kiểm tra login

- Submit form --> Validate
- Kiểm tra email có tồn tại trong Database hay không?
- Lấy hash password
- Verify hash password với plain password
- Thành công --> Lưu thông tin user vào session --> Chuyển xuống bước dưới

## Khởi tạo thiết bị

- Tạo token: `md5(Math.random() + '.' + new Date().getTime())`
- Lưu token vào cookie (Expire 1 năm)
- Kiểm tra token và user_id có tồn tại trong bảng `login_token` hay không?

* Nếu có: Cập nhật: status, last_login, last_activity, updated_at
* Nếu không có: Thêm token vào bảng login_token: user_id, status, last_login, last_activity, created_at, updated_at

## Middleware

- Kiểm tra session có tồn tại hay không?
- Lấy được user_id từ session và token từ cookie
- Truy vấn tới bảng `login_token`: Truy vấn cả user_id và token lấy từ cookie
  --> Không tồn tại --> Redirect về login
  --> Tồn tại --> Lấy status --> Nếu trạng thái true --> Lưu user vào request (Lấy từ session) --> next()

## Đăng xuất

- Lấy login_token, user_id
- Update status trong bảng `login_token`
