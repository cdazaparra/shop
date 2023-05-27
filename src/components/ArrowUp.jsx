import React from "react";
import "../styles/ArrowUp.sass";
import { useThemeContext } from "../context/ThemeContext";
const ArrowUp = () => {
  const { Arrow } = useThemeContext();
  return (
    <div className="ArrowUp">
      <a href={"#Mario"}>
        <img className="ArrowUpImg" src={Arrow} alt="Subir"></img>
      </a>
    </div>
  );
};

export default ArrowUp;
