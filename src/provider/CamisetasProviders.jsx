import React, { useState } from "react";
import { CamisetasContext } from "../context/CamisetasContext";
const CamisetasProviders = ({ children }) => {
  const [camiseta, setCamiseta] = useState("black1");
  let color;
  const handleCamiseta = (color) => {
    setCamiseta(color);
  };
  return (
    <CamisetasContext.Provider
      value={{
        handleCamiseta,
        camiseta
      }}
    >
      {children}
    </CamisetasContext.Provider>
  );
};

export default CamisetasProviders;
