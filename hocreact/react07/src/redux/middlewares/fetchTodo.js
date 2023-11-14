/* eslint-disable no-unused-vars */

import { fetchTodos } from "../actions/todoAction";

//Redux Thunk Middleware
export const fetchTodo = () => {
  return async (dispatch, getState) => {
    //Xử lý các logic
    //- Fetch API
    //- Lưu log
    //- Thay đổi state trước khi đẩy lên Reducer,...
    // --> Gọi hàm dispatch
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    dispatch(fetchTodos(data));
  };
};
