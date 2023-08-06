//Khai báo chuỗi
// var fullname = "Hoàng An F8";

// console.log(fullname, typeof fullname);

// var fullname2 = String("Hoàng An F8");
// console.log(fullname2, typeof fullname2);

// var fullname3 = new String("Hoàng An F8");
// console.log(fullname3, typeof fullname3);

//String = Hàm tạo để định nghĩa các phương thức và thuộc tính xử lý chuỗi

//Để định nghĩa các phương thức, thuộc tính của hàm tạo => Dùng thông qua prototype
console.log(String.prototype);

// console.log(fullname.length);
// console.log(fullname + "Fullstack");

var str = "Hoàng An F8 - Fullstack F8";
//1. length => Lấy độ dài của chuỗi
// console.log(str.length);

//2. charAt(index) => Trả về ký tự theo index

//3. charCodeAt(index) => Trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(1));

//4. concat(str2, str3,...) => Nối chuỗi

// console.log(str.concat("A", "B", "C"));

//5. indexOf(subStr) => Tìm vị trí đầu tiên chuỗi subStr trong chuỗi cha. Nếu tìm thấy trả về index, không tìm thấy trả về -1

// console.log(str.indexOf("F8"));

//6. lastIndexOf(subStr) => Tìm vị trí cuối

// console.log(str.lastIndexOf("F8"));

//7. includes(subStr) => Tìm chuỗi nhưng sẽ trả về true false
// console.log(str.includes("F8"));

//8. slice(start, end) => Cắt chuỗi từ start đến end
// console.log(str.slice(6, 10));
// console.log(str.slice(6));
// console.log(str.slice(-6));

//9. replace(search, with) => tìm và thay thế (Chỉ thay thế vị trí đầu tiên)
//Lưu ý: Việc tìm kiếm trong hàm này sẽ có hỗ trợ cả biểu thức chính quy (Regex)
// console.log(str.replace("F8", "F88"));

// console.log(str.replace(/F8/g, "F88"));

//10. replaceAll(search, with) => Thay thế tất cả
// console.log(str.replaceAll("F8", "F9"));

//11. split(char) => Tách chuỗi thành mảng
// console.log(str.split(" "));

//12. match(pattern) => Cắt chuỗi dựa vào biểu thức chính quy

// var content = `Lorem Ipsum 0388875179 is simply dummy text of the printing and typesetting industry. Lorem Ipsum +84123456789 has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`;

// var pattern = /(0|\+84)\d{9}/g;
// var phones = content.match(pattern);
// console.log(phones);

//13. toLowerCase() => Chuyển thành chữ thường

//14. toUpperCase() => Chuyển thành chữ hoa

//15. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi

//16. trimStart() => Loại bỏ khoảng trắng đầu chuỗi

//17. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi
