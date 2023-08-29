//Tạo element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");
var nextBtn = carouselNav.querySelector(".next");
var prevBtn = carouselNav.querySelector(".prev");

//Lấy danh sách các items
var carouselItems = carouselInner.children;

//Tính chiều rộng của 1 item
var itemWidth = carouselInner.clientWidth; //Trả về chiều rộng của 1 element

//Tính tổng kích thước các items
var totalWidth = itemWidth * carouselItems.length;

//Cập nhật CSS cho carousel-inner
carouselInner.style.width = `${totalWidth}px`;

var position = 0;
//Lắng nghe sự kiện khi click vào nút next
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    //Tính toán ra được tọa độ
    position -= itemWidth;
    //Cập nhật CSS vào carousel-inner để chuyển slide
    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    //Tính toán ra được tọa độ
    position += itemWidth;
    //Cập nhật CSS vào carousel-inner để chuyển slide
    carouselInner.style.translate = `${position}px`;
  }
});
