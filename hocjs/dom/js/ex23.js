//Trigger Event -> Tự kích hoạt 1 event mà không cần tác động của người dùng

/*
Trong JS có 2 cách để Trigger Event: 

1. Dùng hàm có sẵn: click(), submit()

-> Nhược điểm: Không đầy đủ hàm với tất cả các sự kiện

2. Dùng thông qua hàm: dispatchEvent()
*/

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("Hello World");
});

//1 giây click vào nút 1 lần
// setInterval(function () {
//   btn.click();
// }, 1000);

var contentEl = document.querySelector(".content");
var downloadBtn = document.querySelector(".download");
downloadBtn.addEventListener("click", function () {
  var content = contentEl.innerText;
  var blob = new Blob([content]);

  //Tạo URL từ Blob
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "hello-f8.txt";
  a.click();
});

var quantityEl = document.querySelector(".quantity input");
var plusBtn = quantityEl.nextElementSibling;
var minusBtn = quantityEl.previousElementSibling;
var amountEl = document.querySelector(".amount");
var price = 12000;

var changeEvent = new Event("change");

quantityEl.addEventListener("change", function () {
  amountEl.innerText = this.value * price;
});

plusBtn.addEventListener("click", function () {
  quantityEl.value++;
  quantityEl.dispatchEvent(changeEvent);
});

minusBtn.addEventListener("click", function () {
  quantityEl.value--;
  if (quantityEl.value < 1) {
    quantityEl.value = 1;
  }
  quantityEl.dispatchEvent(changeEvent);
});
