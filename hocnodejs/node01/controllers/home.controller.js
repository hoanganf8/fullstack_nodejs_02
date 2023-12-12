const homeController = {
  index: (req, res) => {
    //Lấy thông tin của Request
    //Validate
    //Làm việc với Model (Database)
    //Xử lý logic nghiệp vụ
    //Response: json, view (html), redirect, cookie, header,...
    // res.send(`<h1>Học Express không khó</h1>`);
    const title = "Học ExpressJS không khó";
    res.render("home/index", { title });
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
