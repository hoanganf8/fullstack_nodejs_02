import React, { useEffect, useState } from "react";

const Vnd = ({ onUsd, vnd }) => {
  const [vndValue, setVnd] = useState(0);
  const handleChange = (e) => {
    setVnd(+e.target.value);
  };

  useEffect(() => {
    //Xử lý convert -> usd
    const usd = +(vndValue / 23500).toFixed(2);
    onUsd(usd, vndValue);
  }, [vndValue]);
  return (
    <div>
      <label htmlFor="">VND: </label>
      <input
        type="number"
        name="vnd"
        placeholder="Vnd..."
        onChange={handleChange}
        value={vnd}
      />
    </div>
  );
};

export default Vnd;
