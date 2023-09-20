//Event Scroll -> Thay đổi thanh cuộn trình duyệt

//1. Lấy tọa độ x, y khi scroll
//window.scrollX và window.scrollY

//2. Thay đổi scroll
// window.scroll(x, y)

var currentY = 0;
window.addEventListener("scroll", function () {
  //   console.log("Hello F8");
  var x = window.scrollX;
  var y = window.scrollY;

  //   console.log(`x = ${x}`, `y = ${y}`);

  //   if (y > currentY) {
  //     document.body.style = `background: red`;
  //   } else {
  //     document.body.style = `background: initial`;
  //   }

  //   currentY = y;
});

//Bài tập: Xử lý 2 yêu cầu sau:

/*
- Nếu kéo thanh cuộn xuống -> Đổi màu body thành đỏ
- Nếu kéo thanh cuộn lên -> Reset về màu mặc định
*/

// window.scroll(0, 200);

//Bài tập: Xây dựng tính năng Backtotop

var topBtn = document.querySelector(".top");
window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y > 50) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll(0, 0);
});
