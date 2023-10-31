import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
const rootEl = document.querySelector("#root");

//Tạo React Element
// const h1 = React.createElement("h1", { id: "title" }, "Học React không khó");
// const h2 = React.createElement("h1", { id: "title" }, "Học JS không khó");
// const button = React.createElement(
//   "button",
//   {
//     type: "button",
//     className: "btn",
//     onClick: (e) => {
//       console.log("Hello F8");
//       e.target.style.color = "red";
//       e.target.style.background = "yellow";
//     },
//   },
//   "Click me",
// );
// const h3 = [...Array(50).keys()].map((index) =>
//   React.createElement("h3", {}, `Item ${index + 1}`),
// );

// const div = React.createElement(
//   "div",
//   {
//     id: "content",
//     className: "content",
//     "data-index": "ahihi",
//   },
//   h1,
//   h2,
//   ...h3,
//   button,
// );

// const div = (
//   <div className="content">
//     <h1>Học React không khó</h1>
//     <h3>Item 1</h3>
//     <h3>Item 2</h3>
//     <h3>Item 3</h3>
//     <h3>Item 4</h3>
//     <h3>Item 5</h3>
//     <h3>Item 6</h3>
//     <h3>Item 7</h3>
//     <h3>Item 8</h3>
//     <h3>Item 9</h3>
//     <h3>Item 10</h3>
//     <button
//       className="btn"
//       onClick={() => {
//         console.log("Hello F8");
//       }}
//     >
//       Click me
//     </button>
//   </div>
// );

//Component
/*
Hàm hoặc Class: Viết hoa ký tự đầu tiên
*/
// const ProductItem = () => {
//   return <h2>Chi tiết sản phẩm</h2>;
// };
// const Product = () => {
//   return (
//     <div>
//       <h1>Danh sách sản phẩm</h1>
//       <ProductItem />
//       <ProductItem />
//       <ProductItem />
//       <ProductItem />
//     </div>
//   );
// };

//Render UI
ReactDOM.createRoot(rootEl).render(<App />);
