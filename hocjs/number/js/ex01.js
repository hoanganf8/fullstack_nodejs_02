//Number = Kiểu dữ liệu nguyên thủy

console.log(Number.prototype);
console.log([Number]);

// var a = "10";
// console.log(a, typeof a);

//Kiểm tra 1 số nguyên
// if (Number.isInteger(a)) {
//   console.log("Đây là số nguyên");
// } else {
//   console.log("Đây không phải số nguyên");
// }

//Số NaN (Not A Number)
// var a = NaN;
// console.log(typeof a);

// var a = 10;
// var b = "a";
// console.log(a % b);

// if (Number.isNaN(a)) {
//   console.log("Đây là NaN");
// }

//Số Infinity
// var a = 1000 ** 10;
// if (a !== Infinity) {
//   console.log(a);
// }

//Nói tóm lại, kiểm tra 1 biến có phải là số hay không?
// var a = 10;
// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
//   console.log(a);
// }

//Ép kiểu số nguyên
// var a = "10abc123";
// a = Number.parseInt(a);
// console.log(a, typeof a);

//Ép kiểu số thực
// var a = "10.123abc123";
// a = Number.parseFloat(a);
// console.log(a, typeof a);

//Ép kiểu số
// var a = "10.3";
// // a = +a;
// a = Number(a);
// console.log(a, typeof a);

//Chuyển số thành chuỗi
// var a = 10;
// // a = a + "";
// a = a.toString();
// console.log(a, typeof a);

//Lấy phần thập phân và làm tròn: toFixed()
//Trả về 1 chuỗi
// var a = 10.356;
// console.log(a.toFixed(2));

//Định dạng số
var price = 12340000;
console.log(
  price.toLocaleString("vi", {
    style: "currency",
    currency: "USD",
  }),
);
