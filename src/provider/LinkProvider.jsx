import React, { useState } from "react";
import { LinkContex } from "../context/LinkContex";
const LinkProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <LinkContex.Provider
      value={{
        handleActive,
        active
      }}
    >
      {children}
    </LinkContex.Provider>
  );
};

export default LinkProvider;
