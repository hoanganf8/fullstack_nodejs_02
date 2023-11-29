import RefreshButton from "./RefreshButton";

export const todoApi = `http://localhost:3005/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi, {
    // cache: "no-cache",
    next: {
      //   revalidate: 5,
      tags: ["todo_list"],
    },
  });
  const data = await response.json();
  return data;
};
const TodoList = async () => {
  const todos = await getTodos();
  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <RefreshButton />
      <hr />
    </>
  );
};

export default TodoList;
