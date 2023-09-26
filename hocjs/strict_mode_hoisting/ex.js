//Strict Mode
/*
Chế độ nghiêm ngặt trong JS 
-> Giảm thiểu lỗi ngầm dành cho lập trình
-> Giúp ứng dụng hoạt động tốt trên các trình duyệt khác nhau
*/
"use strict";
// var a;
// a = 10;
// console.log(a);

// var getTotal = function () {
//   "use strict";
//   a = 10;
//   console.log(a);
// };

// getTotal();

/*
Hoisting

- Cơ chế mặc định của Javascript
- Đẩy phần khai báo biến, hàm (function declaration) lên trước phần thực thi
- Với biến, chỉ đẩy phần khai báo. Không đẩy giá trị
*/

// a = 10;
// console.log(a);
// var a;

// getMessage();

// //function declaration
// function getMessage() {
//   console.log("Hello F8");
// }

// console.log(b);
// var b = 10;

getMsg();
var getMsg = function () {
  console.log("Hello F8");
};
