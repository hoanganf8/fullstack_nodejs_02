//Regex (Tiếp)
/*
Các ký hiệu thay thế
- \d => Từ 0 - 9
- \D => Ngược lại của \d
- \s => Khoảng trắng
- \S => Ngược lại của \d
- \w => Đại diện: chữ thường, hoa, số, _
- \W => Ngược lại của \w

Phủ định: ^ (Thêm trong biểu thức)
Hoặc: | (Nên bọc vào cặp ngoặc tròn)
*/

// const phone = "0388875179";
// const pattern = /^(0|\+84)\d{9}$/;
// const check = pattern.test(phone);
// console.log(check);

// const str = "hoangan.web1";
// const pattern = /^[^A-Z0-9]+$/;
// const check = pattern.test(str);
// console.log(check);

//Bài tập: Viết biểu chính quy kiểm tra 1 url hợp lệ
// const url = `https://fullstack-nodejs.fullstack.edu.vn/?id=70154cee-6200-4bfa-8367-b37d34e90498`;
// const pattern =
//   /^(http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/?|\/[\w\-\/?=&+#\.]+)$/;
// const check = pattern.test(url);
// console.log(check);

//Ký tự đại diện cho tất cả ký tự: .

const html = `<h2 class="title">Hello F8</h2>`;
const pattern = /^<[a-z0-9-]+.*>.*<\/[a-z0-9-]+>$/;
const check = pattern.test(html);
