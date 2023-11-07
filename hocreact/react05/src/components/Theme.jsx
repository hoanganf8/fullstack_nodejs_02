import "./Theme.css";
import Content from "./Content";
import Toggle from "./Toggle";
import { MyContext } from "../App01";
import { useContext } from "react";
const Theme = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={`main theme-${state.theme}`}>
      <Toggle />
      <Content />
    </div>
  );
};

export default Theme;
