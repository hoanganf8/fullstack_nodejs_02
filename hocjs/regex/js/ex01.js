/*
Regular Expression (Regex) = Biểu thức chính quy
- Sử dụng để xử lý chuỗi nâng cao
- Các ký hiệu theo 1 ràng buộc nhất định
- Các tác dụng: 
+ So khớp
+ Cắt chuỗi
+ Thay thế

Cấu trúc: /regex/modifier
- regex: Các ký hiệu
- modifier: Cấu hình cho biểu thức (Phụ thuộc cho các ngôn ngữ lập trình khác nhau)

Website Test Regex: https://regex101.com/

Các ký hiệu hay dùng của Regex

- string -> Chuỗi cố định
- Khớp đầu chuỗi: ^
- Khớp cuối chuỗi: $
- Khớp theo ký tự đại diện:
+ [a-z] -> Chữ thường
+ [A-Z] -> Chữ hoa
+ [0-9] -> số
+ [charlist] -> Các ký tự muốn khớp

Các biểu thức trong 1 cặp ngoặc vuông sẽ kết hợp theo điều kiện hoặc

- Khớp độ dài: Mặc định độ dài các biểu thức là 1
+ {value} -> Độ dài cố định
+ {min, max} -> Độ dài từ min đến max
+ {min,} -> Độ dài >= min 

- Ký tự viết tắt của độ dài: 
+ -> {1,}
* -> {0,}
? -> {0, 1}

- Khi gặp các ký hiệu của biểu thức chính quy mà vẫn muốn kiểm tra, thêm \ phía trước: . / [ ],...
*/

// const pattern = /^[a-z_][a-z_0-9-]{5,}$/;
// const str = "_hoanganit";
// const check = pattern.test(str);
// console.log(check);
//Yêu cầu: Bắt đầu bằng chữ hoặc dấu gạch dưới

//Check email: username@domain
const pattern = /^[a-z-_0-9\.]{3,}@[a-z0-9]+[a-z\.-_0-9]*\.[a-z]{2,}$/;
const email = "hoangan.web@gmail.com";
const check = pattern.test(email);
console.log(check);
