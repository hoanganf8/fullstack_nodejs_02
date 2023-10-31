import React from "react";

const User = ({ name, email, children }) => {
  return (
    <div>
      {children}
      <h3>Tên: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default User;
