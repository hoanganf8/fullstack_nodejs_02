// var a = 9;
// console.log("Hoàng An");
// console.log("Hoàng An");
// console.log("Hoàng An");

// if (a >= 10) {
//   console.log("F8");
//   console.log("F8");
//   console.log("F8");
// } else {
//   console.log("Không đúng");
// }

/*
Câu lệnh rẽ nhánh if (Có 4 loại)

1. Câu lệnh if thiếu

if (dieukien) {
    Nội dung
}

2. Câu lệnh if đầy đủ

if (dieukien) {
    Nội dung đúng
} else {
    Nội dung sai
}

3. Câu lệnh if nhiều nhánh

if (dieukien1) {
    Nội dung 1
} else if (dieukien2) {
    Nội dung 2
} else if (dieukien3) {
    Nội dung 3
} else {
    Nội dung 4
}

4. Câu lệnh if lồng nhau
if (dieukien) {
    if (dieukien2) {

    } else {

    }
} else {

}
*/

/*
Tính lương thực nhận của nhân viên

var total = 15000000

Tính lương thực nhận sau khi trừ thuế

- Nếu lương < 5tr => Thuế = 1%
- Nếu lương từ 5tr đến 15tr => Thuế = 3%
- Nếu lương trên > 15tr => Thuế = 5%

Đặt tên biến lương thực nhận là: income
*/

var total = 15000000,
  tax,
  income;

if (total < 5000000) {
  tax = 1;
} else if (total > 15000000) {
  tax = 5;
} else {
  tax = 3;
}

income = total - (total * tax) / 100;

console.log(`Lương: ${income}`);
