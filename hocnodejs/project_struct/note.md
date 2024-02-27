# Flow Request

User Request ==> Middleware ==> Route ==> Middleware ==> Requests ==> Controller

- Service => Model
- Transformer

Rút gọn

Controller => Servivce (Model) => Transformer

Lưu ý trong service:

- Nhận request, dữ liệu từ controller
- Không có response
- Trả về dữ liệu

Ngoại lệ: Service có thể được gọi ở: Middleware, Requests

# Repository Pattern

Controller => Service => Repository => Model

- create
- update
- findOne
- findAll
- delete

Ví dụ: Đổi từ postgres --> MongoDB
