//DOM HTML

// var content = document.querySelector(".content");

//1. Lấy nội dung thẻ html
// console.log(content.innerHTML);

// console.log(content.innerText);

// console.log(content.textContent);

// console.log(content.outerHTML);

//2. Thay đổi nội dung cho thẻ html

// content.innerHTML = `<h2>Javascript</h2>`;

// content.innerText = `<h2>Javascript</h2>`;

// content.outerHTML = `<h2>Javascript</h2>`;

var content = document.querySelector(".content");
var result = document.querySelector(".result");
var btn = document.querySelector(".btn");
var btnText = btn.querySelector(".text");
var btnNumber = btn.querySelector(".number");
var count = 0;
btn.addEventListener("click", function () {
  if (result.innerText === "") {
    result.innerHTML = content.innerHTML;
    content.innerHTML = "";
    // this.innerText = "Lên";
    btnText.innerText = "Lên";
  } else {
    content.innerHTML = result.innerHTML;
    result.innerHTML = "";
    // this.innerText = "Xuống";
    btnText.innerText = "Xuống";
  }

  btnNumber.innerText = ++count;
});
