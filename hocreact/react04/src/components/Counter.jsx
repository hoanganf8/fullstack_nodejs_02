import React, { useReducer } from "react";
import { reducer } from "../reducer/reducer";

const Counter = () => {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: "counter/increment", //tenfeature/tenaction
      payload: 1, //data
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement", //tenfeature/tenaction
      payload: 2, //data
    });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
