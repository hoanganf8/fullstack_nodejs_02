import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";

const Counter = () => {
  //Lấy state từ store
  const count = useSelector((state) => {
    return state.counter.count;
  });
  //Gọi hàm dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
