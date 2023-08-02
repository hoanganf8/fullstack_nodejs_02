var action = "edit";

switch (action) {
  case "insert":
  case "add":
  case "create":
    console.log("Thêm");
    break;

  case "edit":
  case "update":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}

if (action === "insert" || action === "add" || action === "create") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}

/*
Hiển thị số ngày trong 1 tháng

Tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
Tháng 30 ngày: 4, 6, 9, 11
Tháng 29 ngày: 2

month = 11
=> Tháng 11 có 30 ngày

Yêu cầu ràng buộc
- Tháng phải là số nguyên
- Tháng từ 1 đến 12
- Không được sử dụng hàm
*/

var month = "11";
if (month % 1 === 0 && month >= 1 && month <= 12) {
  var days;
  month = +month; //Ép về kiểu số
  switch (month) {
    case 2:
      days = 29;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
      break;
  }

  console.log(`Tháng ${month} có ${days} ngày`);
} else {
  console.log(`Tháng không hợp lệ`);
}
