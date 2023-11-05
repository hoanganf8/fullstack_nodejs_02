import React, { useState } from "react";
import Vnd from "./Vnd";
import Usd from "./Usd";

const ConvertCurrency = () => {
  const [usd, setUsd] = useState(0);
  const [vnd, setVnd] = useState(0);
  const handleUsd = (usd, vnd) => {
    setUsd(usd);
    setVnd(vnd);
  };
  const handleVnd = (vnd, usd) => {
    setVnd(vnd);
    setUsd(usd);
  };
  return (
    <div>
      <Vnd onUsd={handleUsd} vnd={vnd} usd={usd} />
      <Usd onVnd={handleVnd} usd={usd} vnd={vnd} />
    </div>
  );
};

export default ConvertCurrency;

/*
vnd -> convertcurrency re-render -> vnd, usd đều bị re-render -> giá trị của vnd không thay đổi
usd -> convertcurrency re-render -> vnd, usd đều bị re-render -> giá trị của usd không thay đổi
*/
