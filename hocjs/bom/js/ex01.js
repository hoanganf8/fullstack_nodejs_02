//BOM = Browser Object Model

//1. window.open() -> Mở cửa số mới
const btn = document.querySelector(".btn");
let website;
btn.addEventListener("click", () => {
  //   window.open(
  //     "https://fullstack.edu.vn",
  //     "",
  //     "width=300px,height=300px,top=100px,left=100px",
  //   );
  website = window.open("https://fullstack.edu.vn");
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  website.close();
});

//2. window.location -> Thao tác với URL
console.log(window.location);
// const domain = window.location.hostname;
// console.log(domain);

// window.location.href = "https://fullstack.edu.vn";
// window.location.search = "id=1&keyword=abc";

// const url = new URLSearchParams(window.location.search);
// const id = url.get("id");
// const keyword = url.get("keyword");
// console.log(id, keyword);

// const reloadBtn = document.querySelector(".reload");
// reloadBtn.addEventListener("click", () => {
//   window.location.reload();
// });

//3. window.history.pushState()
const productName = document.querySelector(".product-name a");
productName.addEventListener("click", (e) => {
  e.preventDefault();
  const url = e.target.getAttribute("href");
  window.history.pushState({}, "", url);
});

//Config Webserver (Nginx, Apache) -> Hỗ trợ Rewrite URL
