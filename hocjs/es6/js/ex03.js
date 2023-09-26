//Destructuring: Áp dụng với Array, Object
// -> Phá vỡ cấu trúc để có thể truy cập vào các phần tử trong array, object và gán thành các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   address: "Hà Nội",
//   salary: 5000000,
// };

// const name = user.name;
// console.log(name);

// const { name: _name, email, age = 31 } = user;

// console.log(_name, email, age);

// const key = "age";

// const { name: _name, email, [key]: a, ...rest } = user;
// console.log(_name, email, a);
// console.log(rest);

// let { age, salary } = user;
// age = 35;
// console.log(age);

// const user = [
//   "Hoàng An",
//   "hoangan.web@gmail.com",
//   31,
//   "Hà Nội",
//   { a: 1, b: 2, c: 3 },
// ];

// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);

// const [username, email, age, address, { a, b, c }] = user;

// console.log(username, email, age, address);
// console.log(a, b, c);

// const useState = () => {
//   const handle = () => {
//     return "F8";
//   };
//   return [10, handle];
// };

// const [user, setUser] = useState();

// console.log(user);
// console.log(setUser());

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// const getOption = ({ name, email, age }) => {
//   //   const { name: _name, email, age } = opt;
//   console.log(name, email, age);
// };

// getOption({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
// });

// const customers = [
//   {
//     id: 1,
//     name: "Hoàng An",
//   },

//   {
//     id: 2,
//     name: "Hoàng An 2",
//   },

//   {
//     id: 3,
//     name: "Hoàng An 3",
//   },
// ];

// const result = customers
//   .map(({ id, name }) => `<h2>${id} - ${name}</h2>`)
//   .join("");
// console.log(result);

//Spread Operator -> Trải các phần tử trong object, array ra ngoài
// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// const newObj = { ...oldObj, salary: 5000000 };

// console.log(newObj);

const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];

// const newArr = [31, ...oldArr];

// console.log(newArr);

const newArr = [...oldArr];

const getTotal = (a, b) => {
  return a + b;
};

const values = [5, 10, 15];

const result = getTotal(...values);

console.log(result);

//rest parameter
const getMax = (...args) => {
  console.log(args);
};

getMax(5, 10, 15, 20);

/*
Tìm hiểu class để làm bài tập về nhà
*/
