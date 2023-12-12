const homeController = {
  index: (req, res) => {
    //Lấy thông tin của Request
    //Validate
    //Làm việc với Model (Database)
    //Xử lý logic nghiệp vụ
    //Response: json, view (html), redirect, cookie, header,...
    // res.send(`<h1>Học Express không khó</h1>`);
    const title = "<i>Học ExpressJS không khó</i>";
    const check = true;
    const users = ["User 1", "User 2", "User 3"];
    res.render("home/index", { title, check, users });
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
