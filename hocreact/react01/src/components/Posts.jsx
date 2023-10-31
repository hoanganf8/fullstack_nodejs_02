import React from "react";

const Posts = ({ onGetData }) => {
  return (
    <div>
      <button
        onClick={() => {
          onGetData("Hello F8");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Posts;

/*
const a = () => {}
const b = a;
const c = b;
a();
b();
c();
*/
