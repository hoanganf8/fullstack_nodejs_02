// var user = {
//   name: "Hoàng an",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     var current = this;
//     console.log(this);
//     return {
//       age: 31,
//       getInfo: function () {
//         console.log(this);
//         return `
//         Name: ${current.name}
//         Email: ${current.email}
//         `;
//       },
//     };
//   },
// };

// console.log(user.getName().getInfo());

//Prototype
Object.prototype.combine = function (...args) {
  //rest params = Tham số còn lại
  var current = this;
  var newArr = args.map(function (key) {
    return current[key];
  });
  return newArr;
};

Object.prototype.message = "Hoàng An F8";

var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
};

console.log(users.combine("name", "age"));

var customers = {
  name: "Hoàng An F8",
  age: 31,
  email: "hoangan@fullstack.edu.vn",
};
console.log(customers.combine("name", "age", "email"));

//Làm thế nào để kế thừa được hàm combine ở tất cả các object

// var fullname = "Fullstack";
// console.log(fullname.message);
// console.log(String.prototype);

// var age = 31;
// console.log(age.message);
// console.log(Number.prototype);
// console.log(Date.prototype);

Array.prototype.welcome = "Chào mừng bạn đến với F8";
var a = [];
console.log(a.message);
console.log(a.welcome);

var b = "An";
console.log(b.welcome);
