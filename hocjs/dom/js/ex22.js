var slider = document.querySelector(".slider");
var msg = document.querySelector(".msg");

//1. change -> Khi thay đổi
// slider.addEventListener("change", function () {
//   console.log(this.value);
// });

//2. input -> Bấm chuột xuống, kéo

//Tạo ra event: finish
// var finishEvent = new Event("finish");

// slider.addEventListener("input", function () {
//   //   console.log(this.value);
//   if (+this.value === 100) {
//     // msg.innerText = `Hello F8`;
//     slider.dispatchEvent(finishEvent);
//     //Phản hồi sự kiện
//   } else {
//     //msg.innerText = "";
//   }
// });

// slider.addEventListener("finish", function () {
//   msg.innerText = `Hello F8`;
// });

slider.addEventListener("over", function (e) {
  console.log(e);
  //   console.log(this.data);
});

// document.querySelector(".slider2").addEventListener("over", function () {
//   console.log(this.data);
// });
