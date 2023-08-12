/*
Object = Đối tượng => Kiểu dữ liệu tham chiếu

Hàm tạo của object: Object

Cấu tạo của Object

- Thuộc tính: Đặc điểm, tính chất
- Phương thức: Hành động

2 loại object: 
- Object literal
- Function Constructor (Hàm tạo)
*/

//Khai báo object
var user = {
  //key: value
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
  getName: function () {
    return "Hoàng An";
  },
};

//Thêm key cho object
user.country = "Việt Nam";
user["address"] = "Cầu Giấy - Hà Nội";

//Sửa giá trị của key trong object
user.name = "Hoàng An F8";

//Xóa key
// delete user.age;

//Truy cập vào key của object
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user["age"]);

//Lấy tất cả key trong object
// for (var key in user) {
//   //   console.log(key); //key
//   if (typeof user[key] === "function") {
//     console.log(user[key]());
//   } else {
//     console.log(user[key]);
//   }
// }

// console.log("=============");

// Object.keys(user).forEach(function (key) {
//   if (typeof user[key] === "function") {
//     console.log(user[key]());
//   } else {
//     console.log(user[key]);
//   }
// });

var users = [
  {
    id: 1,
    name: "Hoàng An",
    email: "hoangan@gmail.com",
  },
  {
    id: 2,
    name: "Sơn Đặng",
    email: "sondn@gmail.com",
  },
  {
    id: 3,
    name: "Nguyễn Dương",
    email: "nguyenduong@gmail.com",
  },
];

console.log(users);

var html = `<table width="100%" border="1">
<tr>
    <th>ID</th>
    <th>Tên</th>
    <th>Email</th>
</tr>
${users
  .map(function (user) {
    return `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `;
  })
  .join("")}
</table>`;
document.write(html);
