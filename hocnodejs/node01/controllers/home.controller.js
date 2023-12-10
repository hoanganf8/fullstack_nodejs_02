const homeController = {
  index: (req, res) => {
    res.send(`<h1>Học Express không khó</h1>`);
  },
};
export default homeController;
/*
Controller --> Page hoặc tên module
Action: Hàm thể hiện 1 chức năng

Ví dụ: 
- Controller: sản phẩm --> Danh từ
- Action: Thêm, sửa, xóa, hiển thị danh sách --> Động từ
*/
