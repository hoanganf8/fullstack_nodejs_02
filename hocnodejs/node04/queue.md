# Database

Table queue

- id
- name
- run_number --> Số lần đã chạy
- content --> Nội dung công việc

Flow

1. Thực thi 1 hành động nào đó (Request) --> Add công việc vào bảng jobs (Dữ liệu, hàm thực thi)
2. Xử lý chạy ngầm (scheduler) --> Server thực thi
