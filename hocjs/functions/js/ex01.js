/*
function tenHam() {
    Nội dung hàm
} 

function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}

Đặt tên:
- camelCase
- Sử dụng động từ: get, set, make, build, print,...

Hàm có giá trị trả về (Hàm return)
Hàm không có giá trị trả về (Hàm void)
*/

//Định nghĩa hàm
// function getMessage(msg, type = "success") {
//   console.log("F8 " + msg);
//   console.log(type);
// }

//Khi định nghĩa hàm => Tham số

//Gọi hàm
// getMessage("Hoàng An", "error");
// getMessage("Sơn");

//Khi gọi hàm => Đối số

// function getTotal(a, b = 0) {
//   var total = a + b;

//   if (b !== 0) {
//     return total;
//   }

//   return -1;

//   //Khi từ khóa return được gọi => Các đoạn chương trình phía sau không hoạt động
// }

// var total = getTotal(5, 10) + 100;
// console.log(total);
// console.log(getTotal(5, 0));

/*
a = b /c
a => Thương
b => Số bị chia
c => Số chia
*/

//Scope => Phạm vi
// function getMsg(msg) {
//   var msgValue = msg + " F8";
//   //Biến cục bộ
//   return msgValue;
// }

// console.log(getMsg("Hoàng An"));

function getMessage() {
  //Biến toàn cục
  return msg;
}

function setMessage(value) {
  msg = value;
}

var msg = "F8";

setMessage("Hoàng An");

console.log(getMessage());
