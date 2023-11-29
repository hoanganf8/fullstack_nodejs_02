"use client";
import { useRef } from "react";
import { handleSubmit } from "./action";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
const TodoForm2 = () => {
  const inputRef = useRef();
  //   const { pending } = useFormStatus();
  //   console.log(pending);
  return (
    <form
      action={async (formData) => {
        await handleSubmit(formData);
        inputRef.current.value = "";
      }}
    >
      <input type="text" placeholder="Tên..." name="name" ref={inputRef} />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm2;
