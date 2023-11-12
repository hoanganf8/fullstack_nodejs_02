/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Content from "./Content";
import { color } from "../libs/color";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // const a = { current: 0 };
  // useEffect(() => {
  //   console.log(`ref: `, countRef);
  //   console.log(`a: `, a);
  // }, [count]);
  const inputRef = useRef();
  const buttonRef = useRef();
  // useEffect(() => {
  //   // console.log(inputRef);
  //   // inputRef.current.focus();
  //   console.log(buttonRef);
  // }, []);
  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Nhập từ khóa..." />
      <Button ref={buttonRef} />
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1); //Upate state
          // countRef.current++;
          // console.log(countRef);
          // a.current++;
        }}
      >
        +
      </button>
      {/* <Content count={1} /> */}
    </div>
  );
};

export default color(Counter);

/*
useRef()

useEffect
1. State thay đổi
2. Re-render
3. UI Update
4. Cleanup
5. Callback

useLayoutEffect
1. State thay đổi
2. Re-render
3. Cleanup
4. Callback
5. UI Update
*/
