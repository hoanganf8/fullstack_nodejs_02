"use client";

import { useState } from "react";
import { todoApi } from "./TodoList";
import { useRouter } from "next/navigation";
const postTodo = async (name) => {
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response;
};
const TodoForm = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postTodo(name);
    if (response.ok) {
      router.refresh();
      setName("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;
