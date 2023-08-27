//Trong event object thường sử dụng 2 phương thức dưới:

//preventDefault()
// -> Chặn hành động mặc định của thẻ html

//stopPropagation()

var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
});

//contextmenu
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("ok chưa");
  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
});

document.addEventListener("click", function () {
  menu.style.display = "none";
});

menu.addEventListener("click", function (e) {
  e.stopPropagation();
});
