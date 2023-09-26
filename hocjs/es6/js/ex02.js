//Arrow Function -> Hàm mũi tên

//1. Không có tham số

// const getMessage = () => {
//     console.log('Hello F8');
// }

// getMessage();

//2. Có 1 tham số

// const getMessage = msg => {
//     console.log(msg);
// }

// getMessage('Hello F8')

//3. Có nhiều tham số
// const getTotal = (a, b) => {
//     return a + b;
// }

// console.log(getTotal(10, 20));

//4. Arrow function có return
// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 20));

var getUser = () => ({
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
});
// console.log(getUser());

//5. Closure sử dụng Arrow Function
var sum = (a) => (b) => a + b;

var add = sum(10);
// console.log(add(20));

const users = [
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

const html = users
  .map(
    (user) => `
<h2>${user.name}</h2>
`,
  )
  .join("");

document.body.innerHTML = html;

/* 
Lưu ý với Arrow Function

- Arrow Function không có tác dụng thay thế function truyền thống
- Arrow Function không binding được this
- Arrow Function không binding được arguments
- Arrow Function không nên sử dụng để làm method của Object
- Arrow Function không có hoisting
- Arrow Function không được dùng để tạo Constructor
*/

const getMax = (...args) => {
  //   console.log(arguments);
  console.log(args);
};

getMax(10, 20, 30);

const User = () => {
  this.name = "Hoàng An";
};

const user = new User();
