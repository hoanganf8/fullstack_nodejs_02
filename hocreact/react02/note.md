Functional Component -> Chỉ có props

=> React Hook để làm việc với các thành phần không có sẵn trong Functional

- Function đặc biệt do React Build sẵn hoặc do lập trình viên tự tạo
- Chỉ được phép gọi ở cấp đầu tiên trong functional component
- Bắt đầu bằng use

1. useState() -> Làm việc với State trong Functional Component

2. useEffect()

- Mô phỏng vòng đời component trong functional component
- Xử lý các công việc Side Effect

Ví dụ: 
State thay đổi => Re-render
Tính tổng -> Side Effect -> Chạy sau công việc chính

useEffect(callback, dependencies)

Các trường hợp xảy ra

- dependencies -> null | undefined -> Component re-render -> callback sẽ chạy

dependencies -> [] -> callback chỉ chạy 1 lần sau khi component được mouted

dependencies -> [variable1, variable2,..] -> callback chỉ chạy lại khi 1 trong các biến được khai báo thay đổi

callback trả về 1 function -> unmount, hay còn gọi là cleanup
Lưu ý: Cleanup chỉ chạy từ lần 2 trở đi

Thứ tự hoạt động

1. State thay đổi
2. Re-render
3. Cleanup (Nếu có) -> Cleanup của lần trước
4. Callback