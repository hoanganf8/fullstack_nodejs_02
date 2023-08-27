//DOM CSS

/*
Can thiệp css vào các thẻ html thông qua thuộc tính style (Inline CSS)
*/

//Tạo element
var content = document.querySelector(".content");

//Thêm giá trị cho thuộc tính style
// content.style = "color: red; font-weight: bold;";
//=> Không nên dùng bởi vì kế thừa được các thuộc tính đã thiết lập

//Nên sử dụng style như 1 object
console.log(content.style);
content.style.color = "#fff";
content.style.fontWeight = "bold"; //font-weight
content.style.textTransform = "uppercase";

//Thực hành: Thay đổi 1 số thuộc tính sau

/*
- background-color
- text-decoration
- font-style
- background-image

backgroud-image: url(link_anh)
*/
// content.style.backgroundColor = "grey";
// content.style.textDecoration = "line-through";
// content.style.fontStyle = "italic";

// content.style.backgroundImage = `url("${image}")`;

var image =
  "https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc";
var css = {
  backgroundColor: "grey",
  textDecoration: "line-through",
  fontStyle: "italic",
  backgroundImage: `url("${image}")`,
  boxShadow: "5px 5px 5px 5px #ccc",
};

Object.assign(content.style, css); //Nối object css vào object content.style

// console.log(content.style.display);
