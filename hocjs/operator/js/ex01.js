/*
Toán tử

1. Toán tử số học

+, -, *, /, %, **
++, -- => Phép tăng, phép giảm
*/

// var a = "10";
// var b = 20;
//Ép kiểu
// var c = parseInt(a) + parseInt(b);
// var c = +a + +b;
// console.log(c);

// var count = 1,
//   s;
// count++; // count = count + 1
// ++count; //count = count + 1
// s = count++;
// console.log(`Count = ${count}`);
// console.log(`S = ${s}`);

// console.log(++count);

// var count = 1;
// var total = count++ + ++count;
// console.log(total);

/*
2. Toán tử logic

>, <, >=, <=, ==, ===, !=, !==
*/

// var a = 10;
// var b = "10";
// // var c = +a === +b;
// var c = a !== b;
// console.log(c);

// var number = 10;
// if (number === 10) {
//   console.log(`Đúng`);
// } else {
//   console.log(`Sai`);
// }

/*
3. Toán tử kết hợp (lý luận)
&&, ||, !
*/
// var a = 10;
// var b = a >= 5 || a <= 9;
// console.log(b);

/*
4. Toán tử gán (=)

*/

// var a = 20;
// a += 10; //a = a + 10
// a -= 10; //a = a - 10
// a *= 10; //a = a * 10
// a /= 10; //a = a / 10
// a %= 3; //a = a % 3
// console.log(a);

// var str = "Hoàng An";
// // str = str + " F8";
// str += " F8";
// console.log(str);

/*
5. Toán tử 3 ngôi
Cú pháp: dieukienlogic ? giatridung : giatrisai
*/

// var a = 9;
// var b = a >= 10 ? "F8" : "Hoàng An";
// console.log(b);

// document.write(a >= 10 ? "F8" : "");

// var a = 10;
// var total = 1 + 2 + 3 + (a >= 10 ? 5 : 10) + 4 + 5;

// console.log(total);

/*
6. Toán tử nullish (??)
*/

// var a = 0;
// var b = a ?? "F8"; //check undefined, null
// console.log(b);

// //Bài tập: Viết lại toán nullish bằng toán tử 3 ngôi

// var b = a !== null && a !== undefined ? a : "F8";
// console.log(b);

/*
7. Truthy, Falsy
*/

// var a = 10;
// var b = !a ? "F8" : "Hoàng An";
// console.log(b);

/*
False: 0, "", false, undefined, NaN, null
True: Các trường hợp còn lại

Nếu viết: tenbien => Check = true
          !tenbien => Check = false  
*/

/*
8. Toán tử &&
*/

var a = 0;
var b = a && "F8";
//Truthy => Hiển thị giá trị sau &&
//Falsy => Hiển thị giá trị trước &&
console.log(b);

/*
9. Toán tử ||
Truthy => Lấy chính nó
Falsy => Lấy sau dấu ||
=> Ngược lại so với &&
*/
