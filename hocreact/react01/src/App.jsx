import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const App = () => {
  const title = "<span>Học JS không khó</span>";
  const handleClick = (text) => {
    console.log("Hello F8", text);
  };
  //Render JSX theo điều kiện
  // let message = <h2>Vui lòng đăng nhập để tiếp tục</h2>;
  const isLogin = true;
  // if (isLogin) {
  //   message = <h3>Chào mừng bạn đã quay trở lại</h3>;
  // }

  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <h1
        style={{
          color: "red",
          fontWeight: "bold",
        }}
      >
        Học React không khó
      </h1>
      {isLogin && <h3>Chào mừng bạn đã quay trở lại</h3>}
      {users.map(({ id, name }) => (
        <h3 key={id}>{name}</h3>
      ))}
      <h2>{title}</h2>
      <button
        onClick={() => {
          handleClick("Hoàng An");
        }}
      >
        Click me
      </button>
      <Footer />
    </React.Fragment>
  );
};

/*
- Props
- State
*/
