var btn = document.querySelector(".btn");
var email = document.querySelector(".email");

/*
Cách 1: Gán thông qua DOM
*/
btn.onclick = function () {
  console.log("Đăng ký thành công");
};

btn.onclick = function () {
  console.log("Đăng ký thành công 2");
};

// btn.onmousedown = function () {
//   console.log("Bạn vừa bấm chuột xuống");
// };

// btn.onmouseup = function () {
//   console.log("Bạn vừa nhả chuột");
// };

email.onchange = function () {
  console.log("Đã xong");
};

// email.onkeyup = function (e) {
//   console.log("Đang gõ: ", e.key);
// };

email.onfocus = function () {
  console.log("Focus");
};

email.onblur = function () {
  console.log("Thoát input");
};

email.onpaste = function () {
  console.log("Bạn vừa paste");
};

email.oncopy = function () {
  console.log("Bạn vừa copy");
};

/*
Cách 2: Thêm trực tiếp vào thẻ html
*/
var handleRemove = function () {
  console.log("Xóa thành công");
};

//=> Event Handler
