import { MyContext } from "../App01";
import { useContext } from "react";

const Toggle = () => {
  const { state, setTheme } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        setTheme(state.theme === "light" ? "dark" : "light");
      }}
    >
      Toggle {state.theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default Toggle;
