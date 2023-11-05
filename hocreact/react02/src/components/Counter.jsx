import React, { useEffect, useState } from "react";
let a = 10;
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  if (count === 10) {
    a = 11;
  }
  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Cleanup'); //Unmounted
    }
  }, []);
  // useEffect(() => {
  //   console.log('Hello F8', count);
  //   return () => {
  //     console.log('Cleanup', count);
  //   }
  // }, [count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {console.log('Re-render')}
    </div>
  );
};

export default Counter;
