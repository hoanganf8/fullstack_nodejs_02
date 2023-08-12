//Bài 1: Lấy tên trong họ và tên

// var fullname = "Tạ Hoàng An";
// //An

// var firstName = fullname.split(" ").slice(-1).join();

// console.log(firstName);

//Bài 2: Sắp xếp danh sách khách hàng tăng dần theo tên

// var customers = [
//   "Nguyễn Đại Thế",
//   "Nguyễn Dương",
//   "Tạ Hoàng An",
//   "Vũ Đức Tài",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
// ];

// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };

// customers.sort(function (a, b) {
//   //   console.log(b, a);
//   //a = sau
//   //b = trước
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });

// console.log(customers);

//Bài 3: Tìm kiếm danh sách khách hàng theo từ khóa, không phân biệt chữ hoa chữ thường

// var customers = [
//   "Nguyễn Đại Thế",
//   "Nguyễn Dương",
//   "Tạ Hoàng An",
//   "Vũ Đức Tài",
//   "Đặng Ngọc Sơn",
//   "Trần Công Lực",
//   "Nguyễn Hoàng Anh",
// ];

// var keyword = "hoàng";

// var result = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

/*
Hàm reduce()

reduce(callback, initialValue)

- callback: Nhận 3 tham số: 
+ prevValue => Giá trị của lần lặp trước (Nếu return)
+ currentValue => Giá trị của lần lặp hiện tại
+ index => Index của lần lặp hiện tại

- initialValue => Giá trị khởi tạo của prevValue

Giá trị của hàm reduce sẽ là lần return cuối cùng
*/

var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(prev, current);
//   return current;
// }, 0);

// console.log(result);

var result = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(result);

/*
Lần 1: 
- total = 0
- current = 0 + 5 = 5

Lần 2: 
- total = 5
- current = 5 + 10 = 15

Lần 3: 
- total = 15
- current = 15 + 15 = 30

Lần 4: 
- total = 30
- current = 30 + 20 = 50

Lần 5: 
- total = 50
- current = 50 + 25 = 75
*/

//Tìm max trong mảng sau, dùng reduce
var numbers = [5, 1, 9, 2, 6];
var result = numbers.reduce(function (max, number) {
  //   return max < number ? number : max;
  if (max < number) {
    return number;
  }

  return max;
});

console.log(result);

/*
var arr1 = [
    5, 2, 1, 9
];

var arr2 = [
    3, 2, 9
]

Yêu cầu: Tìm phần tử khác giữa mảng 1 và mảng 2

=> [5, 1]

Dùng reduce
*/

var arr1 = [5, 2, 1, 9, 11];

var arr2 = [3, 2, 9, 8];

var diff = arr1.reduce(function (prev, current) {
  //   if (!arr2.includes(current)) {
  //     prev.push(current);
  //   }

  !arr2.includes(current) && prev.push(current);

  return prev;
}, []);

console.log(diff);

//Tham chiếu
var users = ["Hoàng An", "hoangan.web@gmail.com"];

// var customers = users;

//Clone Array
// var customers = users.map(function (user) {
//   return user;
// });
var customers = users.filter(function () {
  return true;
});

customers[0] = "Hoàng An F8";

console.log(users);
console.log(customers);

// var getTotal = function () {
//   Array.from(arguments).forEach(function (value) {
//     console.log(value);
//   });
// };

// getTotal(5, 10, 15, 20);

// var pEl = document.getElementsByTagName("p");
// Array.from(pEl).forEach(function (el) {
//   console.log(el.innerText);
// });

//Không so sánh được 2 mảng
// console.log([1, 2] == [1, 2]);
