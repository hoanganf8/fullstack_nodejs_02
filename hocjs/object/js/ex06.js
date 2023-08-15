var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var customers = {
  job: "Giảng viên",
  salary: 5000000,
};

//Nối object customers vào users (Ko dùng hàm có sẵn, es6 trở lên)
// for (var key in customers) {
//   users[key] = customers[key];
// }
// console.log(users);

var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

//Đếm số lần xuất hiện của mỗi từ (Không phân biệt chữ hoa thường)
//Ví dụ: lorem => 4 lần
var words = content
  .replaceAll(".", "")
  .replaceAll(",", "")
  .replaceAll("!", "")
  .split(" ");

var result = {};

words.forEach(function (word) {
  if (!result[word.toLowerCase()]) {
    result[word.toLowerCase()] = 1;
  } else {
    result[word.toLowerCase()]++;
  }
});

console.log(result);

// var a = {
//   name: "An",
//   email: "hoangan.web@gmail.com",
// };

// var b = {
//   job: "Giảng viên",
//   address: "Hà Nội",
// };

// var result = Object.assign(a, b);
// console.log(result);
// console.log(a);

//Tạo object không có prototype
// var a = {};
var a = Object.create(null);
console.log(a);
