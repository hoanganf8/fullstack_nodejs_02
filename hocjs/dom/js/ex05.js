var link = document.querySelector(".link");
// console.log(link);

//Lấy giá trị thuộc tính (Chỉ áp dụng với thuộc tính thật của thẻ html)

// console.log(link.id);
// console.log(link.href);
// console.log(link.title);
// console.log(link.target);
// console.log(link.className);
// console.log(link.width);

//Cập nhật giá trị thuộc tính
// link.href = "https://google.com";
// link.title = "Trang chủ Google";

//Truy cập vào Data Attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.getAttribute("data-index-number"));

//Truy cập Data Attribute thông qua dataset
// console.log(link.dataset);
// console.log(link.dataset.count);
// console.log(link.dataset.indexNumber);

//Cập nhật giá trị vào Data Atrribute
// link.setAttribute("data-count", 10);
// link.setAttribute("data-index-number", "ahihi");
// link.setAttribute("data-animation-duration", "2s");

//Cập nhật Data Atrribute bằng dataset
// link.dataset.count = 10;
// link.dataset.indexNumber = "ahihi";
// link.dataset.animationDuration = "2s";

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  //   console.log(content.classList);
  //   content.classList.add("hello", "hello-2", "hello-3");
  //   content.classList.remove("content-3", "content-2");
  //   content.classList.toggle("hello");
  //   if (content.classList.contains("content-3")) {
  //     console.log("Tồn tại");
  //   }
  content.remove(); //Xóa element
});
