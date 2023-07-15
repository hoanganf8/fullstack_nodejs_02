# Responsive Web Design

- Thiết kế web thích ứng giúp tương thích với tất cả các thiết bị
- Dựa theo kích thước màn hình
- Cần phân biệt với adaptive
- RWD sử dụng CSS (@media)

## Breakpoint là gì?

- Điểm dừng kích thước mà tại đó giao diện sẽ thay đổi
- Không có breakpoint cố định cho tất cả các dự án
- Nên tham khảo các breakpoint phổ biến

* 576px
* 768px
* 992px
* 1200px
* 1400px

## Media Queries

```
@media all|screen|print and (min-width | max-width: breakpoint) {
    Selector{
        Code CSS
    }
}
```
