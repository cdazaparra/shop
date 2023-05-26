import React from "react";
import "../styles/Footer.sass";
//Context
import { useThemeContext } from "../context/ThemeContext";
const Footer = () => {
  const { BGIcolor } = useThemeContext();
  return (
    <div className={"Footer" + BGIcolor}>
      <div>Diseñado por DC Shop</div>
    </div>
  );
};

export default Footer;
