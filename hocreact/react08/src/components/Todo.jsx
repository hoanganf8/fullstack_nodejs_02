import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todoSlice } from "../redux/slices/todoSlice";
const { addTodo } = todoSlice.actions;
const Todo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const todoList2 = useSelector((state) => state.todo.todoList2);
  const status = useSelector((state) => state.todo.status);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập tên");
      return;
    }
    dispatch(addTodo(name));
    setName("");
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (status === "error") {
    return <h3>Đã có lỗi xảy ra</h3>;
  }

  return (
    <div>
      {/* <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên công việc..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form> */}
      {status === "pending" ? (
        <h3>Loading....</h3>
      ) : (
        todoList2.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
};

export default Todo;
