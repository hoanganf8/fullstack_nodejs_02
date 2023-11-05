import React, { useState } from "react";
import Photo from "./components/Photo";
import Todo from "./components/Todo";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>useEffect Hook</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      <hr />
      {show && <Photo />}
      {/* <Todo /> */}
    </div>
  );
};

export default App;
