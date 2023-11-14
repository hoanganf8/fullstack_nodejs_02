export const fetchTodos = (todoList = []) => {
  return {
    type: "todo/fetch",
    payload: todoList,
  };
};
