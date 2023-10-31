import React, { useState } from "react";

const Counter = () => {
  //   const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    //Không được gọi Hook ở đây
    // setCount(count + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  console.log("re-render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
