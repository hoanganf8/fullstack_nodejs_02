//DOM Navigation
/*
Chọn được element dựa vào 1 element khác
1. Lên cha:
- parentElement => Trả về Element Node
- parentNode => Trả về Node => Học sau

2. Xuống con
- children => Lấy danh sách các element con trực tiếp

3. Kế tiếp

- nextElementSibling => Lấy thành phần kế tiếp (Ngang hàng)

4. Lùi lại
*/
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this);
//   //Chọn thành phần cha của btn
//   console.log(this.parentElement);

//   console.log(this.parentElement.parentElement);
// });

// var menu = document.querySelector(".menu");
// // console.log(menu.querySelectorAll("li"));
// console.log(menu.children); //Array-Like Object
// console.log(menu.children[1].children[1].children[0].children[0].innerText);

//Bài tâp:
/*
Click vào mỗi item trên menu và xử lý các trường hợp sau

- Nếu item đó có menu con (Có ul) => Đổi màu nền của menu con
- Nếu item đó không có menu có => Đổi màu chữ của item vừa click vào
*/

// var linkItems = document.querySelectorAll(".menu a");
// linkItems.forEach(function (link) {
//   link.addEventListener("click", function () {
//     var children = this.parentElement.children;
//     if (children.length === 2) {
//       children[1].style.background = "pink";
//     } else {
//       this.style.color = "red";
//     }
//   });
// });

var productActive = document.querySelector(".products .active");

var firstElement = productActive;

var lastElement = document.querySelector(".products").lastElementChild;

var nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
  var nextElement = productActive.nextElementSibling;

  if (nextElement === null) {
    nextElement = firstElement;
  }

  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
});

var prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
  var prevElement = productActive.previousElementSibling;

  if (prevElement === null) {
    prevElement = lastElement;
  }

  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
});
