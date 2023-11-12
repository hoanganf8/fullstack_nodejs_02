/* eslint-disable react/prop-types */

import { useId } from "react";

const Input = ({ type = "text", label }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={label} id={id} />
    </div>
  );
};

export default Input;
