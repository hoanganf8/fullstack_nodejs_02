//Xây dựng chức năng ẩn/hiện nội dung

//1. Tạo element

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");

//2. Gán sự kiện cho button
btn.addEventListener("click", function () {
  //Kiểm tra điều kiện để gán lại css
  if (content.style.display === "") {
    content.style.display = "none";
    btn.innerText = "Hiện";
  } else {
    content.style.display = "";
    btn.innerText = "Ẩn";
  }
});
