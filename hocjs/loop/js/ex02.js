//Vòng lặp không xác định trước số lần lặp

// var i = 1;
// var n = 10;
// var total = 0;
// while (i <= n) {
//   //   console.log(`F8: ${i}`);
//   total += i;
//   i++;
// }

// console.log(`Total = ${total}`);

// var i = 10;
// do {
//   console.log(i);
//   //   i++;
// } while (i > 10);

//break, continue

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

/*
break: 
- Tối ưu hiệu năng
- Đảm bảo tính đúng
*/

var begin = 3;
var end = 100;
//Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end
var result;
for (var i = begin; i <= end; i++) {
  if (i % 2 === 0) {
    result = i;
    break;
  }
}

console.log(result);

//continue
for (var i = 1; i <= 10; i++) {
  console.log("=====");
  console.log(`a = ${i}`);
  if (i === 5) {
    continue;
  }
  console.log(`i = ${i}`);
}
