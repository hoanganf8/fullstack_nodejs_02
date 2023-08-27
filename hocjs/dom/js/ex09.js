//Event Object

// var btn = document.querySelector(".btn");
// btn.addEventListener("mousedown", function (e) {
//   //e = event object
//   console.log(this);
//   console.log(e);
// });

// var input = document.querySelector(".name");
// input.addEventListener("keyup", function (e) {
//   if (e.key === "Enter") {
//     console.log(this.value);
//   }
// });

// document.addEventListener("keyup", function (e) {
//   console.log(e);
//   if (e.key === "Enter") {
//     document.body.style.background = "red";
//   }

//   if (e.key === "Escape") {
//     document.body.style.background = "initial";
//   }
// });

var btn = document.querySelector(".btn");
/*
mousedown
mousemove
mouseup

Kéo: Giữ chuột trái và di chuyển

- Không có sự kiện giữ chuột
- Di chuyển: mousemove
*/

var isDown = false;
var offsetX, offsetY;

btn.addEventListener("mousedown", function (e) {
  isDown = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", function (e) {
  if (isDown) {
    var clientX = e.clientX - offsetX - 10;
    var clientY = e.clientY - offsetY - 10;
    var css = {
      position: "relative",
      top: clientY + "px",
      left: clientX + "px",
    };
    console.log(e);

    Object.assign(btn.style, css);
  }
});

document.addEventListener("mouseup", function () {
  isDown = false;
});
