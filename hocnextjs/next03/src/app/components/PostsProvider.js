"use client";

import { useState } from "react";
const PostsProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && children}
    </div>
  );
};

export default PostsProvider;
