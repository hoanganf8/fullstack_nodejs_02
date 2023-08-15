// Object.prototype.message = "Fullstack";

// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// for (var key in user) {
//   console.log(key);
// }
// Object.keys(user).forEach(function (key) {
//   console.log(key);
// });

var query = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  category: 1,
};

//Chuyển object trên thành dạng query string
//name=Hoàng+An&email=hoangan.web@gmail.com&category=1
// console.log(Object.entries(query));

// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

//Viết lại vòng lặp map. Đặt tên là map2

Array.prototype.map2 = function (fn) {
  var newArr = [];
  for (var index = 0; index < this.length; index++) {
    var value = this[index];
    var result = fn(value, index);
    newArr[newArr.length] = result;
  }

  return newArr;
};
var users = ["Item 1", "Item 2", "Item 3"];
var newArr = users.map2(function (user, index) {
  //   console.log(user, index);
  return `<h3>${index} - ${user}</h3>`;
});
console.log(newArr);
