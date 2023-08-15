// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var b = {
//   name: "Nguyễn Dương",
//   email: "duong@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

//Cần phải có 1 bản thiết kế cho object
//=> Function Constructor (Hàm tạo)

//Hàm thông thường: getEmail, getAge,...
//Hàm tạo: Person, User,... => viết theo Pascal Case
var Person = function (name, email) {
  //Khai báo các thuộc tính
  //   console.log(this);
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
};

Person.prototype.getId = function () {
  return "#" + Math.floor(Math.random() * 1000);
};

//Tạo đối tượng
var person = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person);
// console.log(person.getId());

// var user = new Person("Dương", "duong@gmail.com");
// user.age = 19;
// console.log(user);
// console.log(user.getId());

//Kiểm tra 1 biến được tạo từ hàm tạo nào
var auth = {};
var fullname = "";
var customer = [];
console.log(auth);
console.log(person.constructor.name);
console.log(auth.constructor.name);
console.log(fullname.constructor.name);
console.log(customer.constructor.name);
//Lưu ý với null và undefined

Person.isPerson = function (variable) {
  return variable && variable.constructor.name === "Person";
};

var a = new Person();
if (Person.isPerson(a)) {
  console.log("Đây là person");
} else {
  console.log("Đây không phải person");
}
