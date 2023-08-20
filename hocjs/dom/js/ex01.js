//DOM Element

//1. Truy xuất thông qua id => Chỉ chọn element đầu tiên
// document.getElementById(id)
// var title = document.getElementById("title");
// title.innerText = "Hoàng An";
// console.log(title.innerText);
// console.log(title.id);
// console.log([title]);

//2. Truy xuất thông qua class
// var titleList = document.getElementsByClassName("title");
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

//3. Truy xuất thông qua Tagname
// var titleList = document.getElementsByTagName("h1");
// for (var i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

//4. Truy xuất thông qua CSS Selector (Chỉ lấy selector đầu tiên)
// var title = document.querySelector("#title.title");
// console.log(title);
// // console.log(title.innerText);
// title.innerHTML = "F8 Education";

//5. Truy xuất thông qua CSS Selector (Lấy tất cả)
// var titleList = document.querySelectorAll("#title.title");
// titleList.forEach(function (title) {
//   console.log(title);
// });

// var body = document.body;
// var head = document.head;
// console.log(body);
// console.log(head);

// var productHeading = document.querySelector(".content .product-heading");
// console.log(productHeading);

// var productDetail = document.querySelector(".content .product-detail");
// console.log(productDetail);

var content = document.querySelector(".content");
productHeading = content.querySelector(".product-heading");
console.log(productHeading);

var fullname = document.register.fullname;
console.log(fullname);

/*
DOM Event
DOM Event Listener
DOM HTML
+ innerHTML
+ innerText
+ outerHTML
+ Attribute
+ Data Attribute
+ ClassList
*/
