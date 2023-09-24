//HTMLElement

HTMLElement.prototype.css = function (style = {}) {
  Object.assign(this.style, style);
};

var title = document.querySelector(".title");

title.css({
  color: "red",
  fontSize: "2rem",
  fontStyle: "italic",
});

//Custom element
//Kỹ thuật tạo ra 1 thẻ html mới có hoạt động giống các thẻ html có sẵn nhưng khác chức năng nhiệm vụ

// function HelloWorld() {
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// }

// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// //Lifecycle Callback -> Vòng đời
// HelloWorld.prototype.constructor = HelloWorld;

// HelloWorld.prototype.connectedCallback = function () {
//   this.innerText = `Xin chào F8`;
// };

// HelloWorld.prototype.attributeChangedCallback = function () {
//   console.log("Khi thuộc tính thay đổi");
// };

// HelloWorld.prototype.disconnectedCallback = function () {
//   console.log("Element bị xóa");
// };

// customElements.define("hello-world", HelloWorld);

component.create("hello-world", function () {
  this.innerText = "Xin chào F8";
});

component.create("f8-image", function () {
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var caption = this.innerText;
  var style = document.createElement("style");
  style.textContent = `
  .box-image {
    border: 1px solid red;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
  }

  .box-image img {
    display: block;
  }

  .box-image p {
    margin: 0;
    font-style: italic;
  }
  `;

  this.innerHTML = `
  <div class="box-image">
    <img src="${link}" width="${width ?? ""}" height="${height ?? ""}"/>
    ${caption.length ? `<p>${caption}</p>` : ""}
  </div>
  `;
  this.prepend(style);
});
