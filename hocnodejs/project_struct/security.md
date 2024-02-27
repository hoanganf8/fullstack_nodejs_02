# Lưu ý liên quan đến bảo mật

## SQL Injection

- Hạn chế sử dụng RAW Query
- Nếu sử dụng Raw Query --> Thông qua Data Binding của ORM
- Nếu không dùng ORM --> Xử lý chuỗi trước khi đưa vào SQL

## Không để lộ tên framework, thư viện

## Upload File

- Giới hạn định dạng cho phép (mime type)
- Giới hạn dung lượng
  ==> Malware, Trojan, Script Shell

## CSRF

- Tấn công giả mạo
- Giải pháp:

* Khởi tạo token (Lưu ở session), so sánh token ở request với token ở trên server
* Không để bị XSS

## XSS

- Thêm html entites vào tất cả các nội dung được hiển thị (Có yếu tố người dùng thay đổi)

## File .env

- Tắt debug mode --> Chuyển về mode production
- Phân quyền: Chmod Linux

## HTML Injection

- User sửa html trước khi gửi request
- Giải pháp: Validate tất cả trường hợp cả ở back-end và front-end

## Brute Force

- Kỹ thuật dò password
- Giải pháp:

* Không thông báo cụ thể sai email hay password
* Đặt Limit Rate: Request nhiều trong 1 thời điểm --> Block
* Khóa tài khoản nếu nhập password sai nhiều lần
* Bật captcha (ReCaptcha)

## Xác minh 2 bước (2FA)

- Gửi qua email hoặc sms

## Bảo vệ trang quản trị bằng Basic Auth

- Cấu hình ở trên server: nginx, apache...

## Sử dụng HTTPS

- Cấu hình trên server

* Cấu hình chứng chỉ SSL (Let's Encrypt)
* Thông qua các CDN: Cloudfalre

## Database

- Tắt remote connect database
- Thêm whitelist

## Thói quen

- Mật khẩu quản trị: Đặt phức tạp
- Không xây dựng chức năng lưu mật khẩu ở trang quản trị
- Tài khoản server: Đặt phức tạp, không để port mặc định (SSH, FTP, Database)
