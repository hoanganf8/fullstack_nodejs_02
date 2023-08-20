// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

//Sao chép object
// var b = a;
// var b = Object.assign({}, a); //=> Chỉ 1 cấp
// var b = { ...a }; //Spead => Học sau => Chỉ 1 cấp
// var b = JSON.parse(JSON.stringify(a)); //=> Học sau => Sao chép được tất cả các cấp

// b.name = "Hoàng An F8";

// console.log(a);
// console.log(b);

// var a = ["Hoàng An", "hoangan.web@gmail.com"];

// var b = a;
// var b = a.map(function (item) {
//   return item;
// });
// var b = a.slice(0);
// var b = a.filter(function () {
//   return true;
// });
// var b = [...a];
// var b = JSON.parse(JSON.stringify(a));

// b[0] = "Hoàng An F8";
// console.log(a);
// console.log(b);

//Option Chaining (?.)
// var a = {};
// console.log(a?.name?.job);

var arr = "Hoàng An";
if (arr?.length) {
  arr.forEach?.(function (item) {
    console.log(item);
  });
}

// console.log({} === {});
// console.log([] === []);
// console.log(function () {} === function () {});

var a = { name: "An", age: 31 };
var b = { name: "An", age: 31 };
console.log(JSON.stringify(a) === JSON.stringify(b));
