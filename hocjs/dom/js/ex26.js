var root = document.querySelector("#root");

var users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];

var render = function () {
  var html = `
  <h1 v-if="1">Danh sách khách hàng</h1>
  ${users
    .map(function (user) {
      return `<h2>${user.name} <button>Xóa</button></h3>`;
    })
    .join("")}
  `;
  //   root.innerHTML = html;
  var templateEl = document.createElement("template");
  templateEl.innerHTML = html;

  var templateNode = templateEl.content.cloneNode(true);
  if (templateNode.children.length) {
    Array.from(templateNode.children).forEach(function (element) {
      handleAttribute(element);
    });
  }
  root.append(templateNode);
};

var handleAttribute = function (element) {
  var vifAttr = element.getAttribute("v-if");
  if (vifAttr) {
    if (+vifAttr !== 1) {
      element.remove();
    }
  }
};

render();
