/*
Biến trong Javascript

Nên đặt tên biến theo quy tắc camelCase
*/

//Khai báo nhiều dòng
var customer;
var user;

//Khai báo trên 1 dòng
var userName, userEmail;

//Khai báo và gán
var customerName = "Hoàng An",
  customerEmail = "hoangan.web@gmail.com";

// console.log(customer);
// console.log(customerName);

// var welcome = "<h1>Javascript</h1>";
// console.log(welcome);
// document.write(welcome);

var courseName = "Fullstack";
// var welcome = "Chào mừng bạn đến khóa " + courseName + " tại F8";

//backtick (`)
var welcome = `Chào mừng bạn đến khóa ${courseName} tại \`F8\``;
//Ký hiệu escape (\)

console.log(welcome);
