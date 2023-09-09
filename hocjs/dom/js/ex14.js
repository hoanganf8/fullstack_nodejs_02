/*
Khi muốn thao tác với 1 thẻ html
-> Cần phải có thẻ html trước
-> Tạo Element Node
*/

// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");
// var h1 = content.querySelector("h1");

// h1.addEventListener("click", function () {
//   this.style.color = "red";
// });

// btn.addEventListener("click", function () {
//   content.innerHTML += `<p>Khóa học Fullstack</p>`;
//   h1 = content.querySelector("h1");

//   h1.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
//Tạo mới element
var h2 = document.createElement("h2");
h2.innerText = "Khóa học Fullstack";
h2.classList.add("course-name");
// console.log(h2);

//Thêm thẻ h2 vào content (Thêm cuối cùng)
// content.appendChild(h2);

content.append(h2);

// btn.addEventListener("click", function () {
//   content.append(h2);
// });

/*
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/

var ul = document.createElement("ul");
for (var i = 1; i <= 3; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.append(li);
}

content.prepend(ul);

//Thêm 1 node vào trước 1 node khác
var p = document.createElement("p");
p.innerText = `Hello F8`;

content.insertBefore(p, h2);

//Thay thế 1 node bằng 1 node khác
var h3 = document.createElement("h3");
h3.innerText = "Hello Hoàng An F8";
content.replaceChild(h3, p);

//Xóa 1 node con
content.removeChild(h2);
