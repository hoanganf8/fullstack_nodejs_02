//Event DOMContentLoaded => Hình thành cây DOM
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".title");
  console.log(title);
});

//Event load => Sử dụng để làm chức năng loading

var preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  //   console.log("Tải xong");
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  preloader.remove();
});
