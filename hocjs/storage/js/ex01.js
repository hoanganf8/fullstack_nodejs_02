//Storage -> Bộ nhớ trình duyệt
//-> Chỉ lưu chữ Text

/*
1. localStorage -> Lưu trữ vĩnh viễn
2. sessionStorage -> Lưu trữ theo phiên của trình duyệt
3. cookie -> Lưu trữ theo thời gian xác định
*/

// localStorage.setItem("email", "hoangan.web@gmail.com");

// const email = localStorage.getItem("email");
// console.log(email);

// localStorage.removeItem("email");

// localStorage.clear();

// sessionStorage.setItem("email", "hoangan.web@gmail.com");

// if (typeof Storage !== "undefined") {
//   //Hỗ trợ Storage
// }

//Cookie
/*
- Có thời gian sống hoặc thiết lập theo phiên (Tắt trình duyệt là bị xóa)
- Cookie sẽ tự động đính kèm vào Http Request nếu dùng trình duyệt
*/

//Thêm cookie mới
const expires = new Date("2023-10-18 09:33:00").toUTCString();

// document.cookie = `email=hoanganit19@gmail.com;expires=${expires}`;

// document.cookie = `email=hoangan.web@gmail.com;expires=${expires};path=/`;

// document.cookie = `username=hoangan.web;expires=${expires};path=/`;

//Đọc cookie
// console.log(document.cookie);

//Sửa cookie
// document.cookie = `username=hoanganf8;expires=${expires};path=/`;

//Xóa cookie
// document.cookie = `username=;expires=${new Date().toUTCString()};path=/`;
