import TodoForm from "./TodoForm";
import TodoForm2 from "./TodoForm2";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoList />
      {/* <TodoForm /> */}
      <TodoForm2 />
    </div>
  );
};

export default Todos;
