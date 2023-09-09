// var h1 = document.createElement("h1");
// h1.innerText = "Count: ";
// document.body.append(h1);

// var countNode = document.createTextNode(0);
// h1.append(countNode);

// var btn = document.createElement("button");
// btn.innerText = "+";
// document.body.append(btn);
// btn.addEventListener("click", function () {
//   //   h1.innerText++;
//   countNode.data++;
// });

//TextNode
// var text = document.createTextNode("Hello");
// console.log(text);
// document.body.append(text);

// text.data = "Hello F8";

//Comment node
// var comment = document.createComment("Hoàng An");
// console.log(comment);
// document.body.append(comment);

//Lỗi bảo mật XSS

var todo = document.querySelector(".todo");
var todoList = todo.querySelector(".todo-list");
var todoForm = todo.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];
  var name = inputEl.value;
  //   var todo = `<p>${name}</p>`;
  //   todoList.innerHTML += todo;
  var todo = document.createElement("p");
  todo.innerText = name;
  todoList.append(todo);
  inputEl.value = "";
});
