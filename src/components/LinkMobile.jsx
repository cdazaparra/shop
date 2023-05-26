import React from "react";
import "../styles/LinkMobile.sass";
//Context
import { useThemeContext } from "../context/ThemeContext";
const LinkMobile = () => {
  const { BGIcolor } = useThemeContext();
  return (
    <div className={"LinkMobile" + BGIcolor}>
      <ul>
        <li>Hola 1</li>
        <li>Hola 2</li>
        <li>Hola 3</li>
        <li>Hola 4</li>
        <li>Hola 5</li>
      </ul>
    </div>
  );
};

export default LinkMobile;
