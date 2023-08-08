//Array được build từ Object
/*
Array bao gồm: 
- index: 1 số tăng dần đều (tuần tự)
- element: giá trị của các phần tử

Kết hợp tên mảng và index => lấy được element
*/

//Khai báo mảng
// var users = [];
// console.log(users, typeof users);

// var users = new Array();
// console.log(users, typeof users);

console.log(Array.prototype);
// console.log([Array]);

/*
3 trường hợp kiểm tra typeof về object
- array
- object
- null
*/

// console.log(Array.isArray(users)); //Kiểm tra 1 biến có phải là mảng hay không?
// console.log(users.length);

/*
Học mảng là học gì? 
- Cách hoạt động
- Khai báo
- Các thao tác: Thêm, sửa, xóa, duyệt
- Các hàm xử lý
- Làm bài tập
*/

var users = ["An", "Anh", "Dũng", "Dương"];

console.log(users);

//1. Lấy số lượng phần tử
// console.log(users.length);

//2. Truy cập 1 phần tử của mảng
// console.log(users[0]);
// console.log(users[2]);

//3. Thêm phần tử mới vào mảng
//tenbien[index] = giatri

// users[users.length] = "A";
// users[users.length] = "B";
// users[users.length] = "C";

//4. Sửa phần tử trong mảng
// users[1] = "Hoàng Anh";

//5. Duyệt mảng

// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var user of users) {
//   console.log(user);
// }

//6. Xóa mảng
// var indexDel = 2;
// var newArr = [];
// for (var index in users) {
//   if (+index === +indexDel) {
//     continue;
//   }

//   newArr[newArr.length] = users[index];
// }

// console.log(newArr);

//Thêm 1 phần tử vào đầu mảng (Không dùng hàm, không dùng es6)

// var customers = [1, 2, 3];
// var value = 0;

// var newArr = [];
// newArr[newArr.length] = value;
// for (var index in customers) {
//   newArr[newArr.length] = customers[index];
// }
// console.log(newArr);

var arr = [];
arr["a"] = "Hoàng An";
arr["b"] = "Dương";
arr["c"] = "Đại Thế";

for (var key in arr) {
  console.log(arr[key]);
}
