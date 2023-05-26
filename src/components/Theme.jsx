import React from "react";
import "../styles/Theme.sass";
//Context
import { useThemeContext } from "../context/ThemeContext";
const Theme = () => {
  const { BGIcolor } = useThemeContext();
  const { handleTheme } = useThemeContext();
  const { imgBG } = useThemeContext();
  return (
    <div className={"Theme" + BGIcolor} onClick={handleTheme}>
      <img src={imgBG} alt={BGIcolor} className="ThemeImg"></img>
    </div>
  );
};

export default Theme;
