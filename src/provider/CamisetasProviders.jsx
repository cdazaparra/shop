import React, { useState } from "react";
import { CamisetasContext } from "../context/CamisetasContext";
const CamisetasProviders = ({ children }) => {
  const [camiseta, setCamiseta] = useState("Amarillo");
  let color;
  const handleCamiseta = (color) => {
    setCamiseta(color);
  };
  console.log(camiseta);
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
