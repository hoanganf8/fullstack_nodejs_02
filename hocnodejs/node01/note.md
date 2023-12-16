# Cách làm việc với Request - Response trong Back-End Server Side

- Giao diện (View) --> Chỉ gọi vào METHOD GET
- Xử lý logic --> Viết ở METHOD: POST, PUT, PATCH, DELETE --> Chuyển hướng về GET để show ra giao diện

Ví dụ: Xây dựng chức năng đăng nhập

- TH1: Đăng nhập failed --> Redirect quay lại form đăng nhập kèm theo thông báo
- TH2: Đăng nhập success --> Redirect về trang chủ

Các cách gửi thông báo giữa các request

- Cách 1: Dùng query string
- Cách 2: Dùng Flash Session (Hay còn gọi là Flash Data)
