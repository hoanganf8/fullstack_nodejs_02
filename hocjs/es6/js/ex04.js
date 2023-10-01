//Object Literal

//Function Constructor

class User {
  //Nội dung class: Thuộc tính và phương thức

  //Phương thức khởi tạo
  constructor(name, email) {
    //Định nghĩa các thuộc tính và thiết lập các giá trị khởi tạo (Initial Value)
    //Phương thức này sẽ thực thi đầu tiên khi đối tượng được khởi tạo
    this.name = name;
    this.email = email;
  }

  //Định nghĩa các phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setMessage(msg) {
    this.msg = msg;
  }
}

//Kế thừa class
class Authentication extends User {
  //Toàn quyền sử dụng các phương thức và thuộc tính của class kế thừa (class cha)

  constructor(name, email) {
    // console.log("Constructor Authentication");
    super(name, email); //Thực thi constructor của class cha
    this.status = true;
    this.msg = null;
  }

  getInfo() {
    return `
    - Name: ${this.getName()}
    - Email: ${this.getEmail()}
    `;
  }

  isLogin() {
    return this.status;
  }
}

const auth = new Authentication("Hoàng An", "hoangan.web@gmail.com");
console.log(auth);
console.log(auth.getInfo());
console.log(auth.isLogin());

auth.setMessage("Hello F8");
console.log(auth.msg);

//Class Expression

const A = class {
  constructor() {
    this.name = "Hoàng An";
  }
};

const a = new A();
console.log(a);

customElements.define(
  "hello-world",
  class extends HTMLElement {
    connectedCallback() {
      this.innerText = `Hello World`;
    }
  },
);
