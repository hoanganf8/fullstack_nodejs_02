import { useState } from "react";
import { postApi } from "./page";
// import { mutate } from "swr"; //global mutate
const addPost = async (data) => {
  const response = await fetch(postApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};
const PostForm = ({ mutate }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addPost({ title });
    if (response.ok) {
      //   mutate(postApi);
      mutate();
      setTitle("");
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tiêu đề..."
        onChange={handleChange}
        value={title}
      />
      <button>Thêm</button>
    </form>
  );
};

export default PostForm;

//mutate swr
