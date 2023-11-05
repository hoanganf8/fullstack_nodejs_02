import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  //   let count = 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, name]);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setCount(todo.length);
  }, [todo]);
  //   setCount(todo.length);
  //   count = todo.length;
  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name..." onChange={handleChange} />
      </form>
      <h3>Có {count} công việc</h3>
    </div>
  );
};

export default Todo;
