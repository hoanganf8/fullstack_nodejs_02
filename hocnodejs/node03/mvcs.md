# Mô hình MVCS (Model View Controller Service)

Request ==> Global Middleware ==> Route ==> Route Middleware ==> Controller ==> Service ==> Model ==> Database

## Controller

- Tiếp nhận request
- Gọi Request --> Validate
- Gọi Service --> Chứa logic nghiệp vụ
- Gọi view/transformer (Response)

## Service

- Lấy dữ liệu từ controller
- Thao tác với model
- Trả về dữ liệu cho controller

# Helper/Utils

- Không liên quan đến database
- Xử lý ở tầng dữ liệu (request, response)

* Xây dựng hàm bỏ dấu Tiếng Việt
* Xây dựng hàm định dạng thời gian
* Xây dựng hàm tạo token từ jwt
* Xây dựng hàm verify token
* Xây dựng hàm mã hóa password
* Xây dựng so sánh password
* Xây dựng hàm kiểm tra độ mạnh yếu mật khẩu

## Helper

- Áp dụng trong các trường hợp không cụ thể
- Ví dụ: hàm bỏ dấu Tiếng Việt, hàm định dạng thời gian,...

## Utils

- Cụ thể hóa trong các chức năng / module
- Hàm tạo token jwt, so sánh token, mã hóa password,...
