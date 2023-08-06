//Đệ quy chính là việc gọi chính hàm đang định nghĩa
//Phải có điều kiện dừng

var showNumber = function (n) {
  console.log(n);
  if (n > 1) {
    showNumber(n - 1);
  }
};

// showNumber(10);

//Tính giá trị biểu thức
//S = 1 + 2 + 3 + ... + N
//Không dùng vòng lặp, công thức

// var sum = function (n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sum(n - 1);
// };

// console.log(sum(10));

var fibonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
};

console.log(fibonaci(11));
