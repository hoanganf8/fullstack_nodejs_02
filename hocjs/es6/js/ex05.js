//Static Method, Property
// -> Không bị phụ thuộc bởi đối tượng, không bị thay đổi khi khởi tạo lại đối tượng

//Array.isArray()
//Math.PI

class User {
  constructor() {
    //Thuộc tính non-static
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
  }

  //Phương thức non-static
  getName() {
    // console.log(this);
    console.log(this.constructor.getEmail());
    return "F8";
  }

  //Thuộc tính static
  static message = "Chào mừng bạn quay trở lại với F8";

  //Phương thức static
  static getEmail() {
    // console.log(this);
    //Call getName
    //Tạo object
    // const obj = new this(); //this = class User
    // console.log(obj.getName());
    return "contact@fullstack.edu.vn";
  }
}

// console.log(User.message);
// console.log(User.getEmail());

const user = new User();
console.log(user.getName());
// user.name = "Hoàng An F8";
// console.log(user);

// const user2 = new User();
// console.log(user2);

/*
Từ 1 phương thức tĩnh -> Làm sao truy cập được vào 1 phương thức bình thường
*/

class Person {
  #age;
  constructor() {
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
    this.#age = 31;
  }

  get getName() {
    return this.name;
  }

  set setEmail(value) {
    this.email = value;
  }

  get getAge() {
    return this.#age;
  }
}

const person = new Person();

console.log(person.getName);

person.setEmail = "contact@fullstack.edu.vn";

console.log(person);

//array.length

console.log(person.getAge);
