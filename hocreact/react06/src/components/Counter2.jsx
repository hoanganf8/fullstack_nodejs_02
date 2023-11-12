import { useCallback, useState } from "react";
import Content from "./Content";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <Content onReset={handleReset} />
    </div>
  );
};

export default Counter2;
