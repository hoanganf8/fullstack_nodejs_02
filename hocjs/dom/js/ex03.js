//Event Listener
var btn = document.querySelector(".btn");

var complete = document.querySelector(".completed");

var handleClick = function () {
  console.log("Đăng ký khóa học");
};
btn.addEventListener("click", handleClick);

complete.addEventListener("click", function () {
  btn.removeEventListener("click", handleClick);
});

// btn.addEventListener("click", function () {
//   console.log("Gửi email chào mừng");
// });

/*
Event trong DOM luôn tồn tại 1 tham số ở listener => Gọi là Event Object
*/

var items = document.querySelectorAll("ul li");
items.forEach(function (item) {
  item.addEventListener("click", function () {
    // console.log(item);
    console.log(this);
  });
});

/*
=> Trong Event còn 1 chuyên đề là: Custom Event => Học sau
*/
