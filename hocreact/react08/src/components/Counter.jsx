import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../redux/slices/counterSlice";
const { increment, decrement } = counterSlice.actions;
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log(decrement(5));
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(increment(10))}>+</button>
    </div>
  );
};

export default Counter;
