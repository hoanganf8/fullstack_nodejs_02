import React from "react";
import Theme from "./components/Theme";
import { useState } from "react";
export const MyContext = React.createContext();
const App = () => {
  const [state, setState] = useState({
    theme: "light",
  });
  const setTheme = (theme) => {
    setState({ ...state, theme });
  };
  return (
    <MyContext.Provider value={{ state, setTheme }}>
      <Theme />
    </MyContext.Provider>
  );
};

export default App;

/*
App 
  - Theme
    - Toggle
    - Content

1. Đối tượng Context

2. Provider

3. Consumer
*/
