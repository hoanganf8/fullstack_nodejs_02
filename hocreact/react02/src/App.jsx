import React, { useState } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";
const App = () => {
  const [show, setShow] = useState(true);
  return <div>
    {
      show && <Counter />
    }
  
    <hr />
    <button onClick={() => setShow(!show)}>Toggle</button>
  </div>
};

export default App;
