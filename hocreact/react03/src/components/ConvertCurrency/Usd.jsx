import React, { useEffect, useState } from "react";

const Usd = ({ usd, onVnd }) => {
  const [usdValue, setUsd] = useState(0);
  const handleChange = (e) => {
    setUsd(+e.target.value);
  };
  useEffect(() => {
    const vnd = usdValue * 23500;
    onVnd(vnd, usdValue);
  }, [usdValue]);
  return (
    <div>
      <label htmlFor="">USD:</label>
      <input
        type="number"
        name="usd"
        placeholder="Usd..."
        onChange={handleChange}
        value={usd}
      />
    </div>
  );
};

export default Usd;
