# Các thuộc tính trong nhóm Flex Container

- display: flex => Kích hoạt flexbox (Flexible Box Module)
- flex-direction: Chọn hướng (Thay đổi trục)

* row: Trục nằm ngang (Mặc định)
* row-reverse: Trục nằm ngang đảo ngược
* column: Trục đứng
* column-reverse: Trục đứng đảo ngược

- justify-content: Căn chỉnh các item theo hướng song song với trục chính

* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- align-items: Căn chỉnh các item theo hướng vuông góc với trục chính

* stretch
* flex-start
* flex-end
* center
* baseline

- flex-wrap

* nowrap
* wrap
* wrap-reverse

- align-content: Căn chỉnh hàng (cột), chỉ áp dụng khi có nhiều hàng (cột)

* stretch
* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- gap: Chỉnh khoảng cách giữa các hàng và cột

# Các thuộc tính trong nhóm Flex Item

- flex-grow: Gãn đều các item để lấp vào còn trống trong flex container
- flex-shrink
- flex-basis

* giống width nếu flex-direction là row
* giống height nếu flex-direction là column
* Chặn bởi min-width và max-width nếu flex-direction là row
* Chặn bởi min-height và max-height nếu flex-direction là column
