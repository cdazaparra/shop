import React from "react";
import "../styles/BtnMenuMobile.sass";

//Context
import { useLinkContex } from "../context/LinkContex";
import { useThemeContext } from "../context/ThemeContext";
const BtnMenuMobile = () => {
  const { BGIcolor } = useThemeContext();
  const { imgMenu } = useThemeContext();
  const { handleActive } = useLinkContex();
  return (
    <div className={"BtnMenuMobile" + BGIcolor} onClick={handleActive}>
      <img
        className={"BtnMenuMobile" + BGIcolor + "Img"}
        src={imgMenu}
        alt="Menú"
      ></img>
    </div>
  );
};

export default BtnMenuMobile;
