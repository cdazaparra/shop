import React from "react";
import "../styles/LinkMobile.sass";
//Context
import { useThemeContext } from "../context/ThemeContext";
import { useLinkContex } from "../context/LinkContex";
const LinkMobile = () => {
  const { BGIcolor } = useThemeContext();
  const { handleActive } = useLinkContex();
  return (
    <div className={"LinkMobile" + BGIcolor}>
      <nav className={"Nav" + BGIcolor}>
        <a href={"#Mario"} data-scroll-spy onClick={handleActive}>
          Mario
        </a>
        <a href={"#Wow"} data-scroll-spy onClick={handleActive}>
          Wow
        </a>
        <a href={"#Lol"} data-scroll-spy onClick={handleActive}>
          Lol
        </a>
        <a href={"#Sout Park"} data-scroll-spy onClick={handleActive}>
          Sout Park
        </a>
        <a href={"#Rick And Morthy"} data-scroll-spy onClick={handleActive}>
          Rick And Morthy
        </a>
        <a href={"#Dragon Ball"} data-scroll-spy onClick={handleActive}>
          Dragon Ball
        </a>
        <a
          href={"#Caballeros Del Zodiaco"}
          data-scroll-spy
          onClick={handleActive}
        >
          Caballeros Del Zodiaco
        </a>
        <a href={"#Avengers"} data-scroll-spy onClick={handleActive}>
          Avengers
        </a>
        <a href={"#Otros"} data-scroll-spy onClick={handleActive}>
          Otros
        </a>
      </nav>
    </div>
  );
};

export default LinkMobile;
