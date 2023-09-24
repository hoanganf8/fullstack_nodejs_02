// //Tạo shadow dom
// var title = document.querySelector(".title");
// var root = title.attachShadow({
//   mode: "open",
// });
// console.log([root]);
// root.innerHTML = `F8 - Hoàng An`;

component.create("todo-item", function () {
  var name = this.innerText;

  var shadow = this.attachShadow({
    mode: "open",
  });
  var style = document.createElement("style");
  style.textContent = `
  .todo-item {
    border: 1px solid red;
    padding: 10px 0;
  }
  `;

  shadow.innerHTML = `<div class="todo-item">
  <input type="checkbox" />
  <span>${name}</span>
  </div>`;
  shadow.prepend(style);
});
