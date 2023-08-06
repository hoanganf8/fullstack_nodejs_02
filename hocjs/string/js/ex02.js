// var email = "hoangan@fullstack.edu.vn";

// //Lấy username của email
// var username = email.slice(0, email.indexOf("@"));

// console.log(username);

// var fullname = "TẠ HOÀNG An";

// //Kiểm tra biến fullname có được viết hoa hết hay không?
// if (fullname === fullname.toUpperCase()) {
//   console.log("viết hoa");
// } else {
//   console.log("không viết hoa");
// }

var fullname = "tạ hoàng an";
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// console.log(fullname);
//Chuyển thành tên dạng chuẩn: Tạ Hoàng An

// var convert = function (str, index) {
//   return str.charAt(index).toUpperCase() + str.slice(index + 1);
// };

var index;
var result = "";
for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);

  if (char === " " && charNext !== " ") {
    index = i + 1;
  }

  if (i === index) {
    result += char.toUpperCase();
  } else {
    result += char;
  }
}

console.log(result);
