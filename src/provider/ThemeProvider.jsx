import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import sunImg from "../assets/Icons/sun.png";
import moonImg from "../assets/Icons/moon.png";
import LogoD from "../assets/icons/LogoD.png";
import LogoL from "../assets/icons/LogoL.png";
import ArrowUpL from "../assets/icons/ArrowL.png";
import ArrowUpD from "../assets/icons/ArrowD.png";
import MenuL from "../assets/icons/btnMenuL.png";
import MenuD from "../assets/icons/btnMenuD.png";
import CartD from "../assets/icons/CartD.png";
import CartL from "../assets/icons/CartL.png";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  let BGcolor, BGIcolor, imgBG, Logo, Arrow, imgMenu, Cart;
  const handleTheme = () => {
    setTheme(!theme);
  };
  if (theme) {
    BGIcolor = "light";
    imgBG = moonImg;
    Logo = LogoD;
    BGcolor = "fLight";
    Arrow = ArrowUpD;
    imgMenu = MenuL;
    Cart = CartD;
  } else {
    BGIcolor = "dark";
    imgBG = sunImg;
    Logo = LogoL;
    BGcolor = "fDark";
    Arrow = ArrowUpL;
    Cart = CartL;
    imgMenu = MenuD;
  }
  return (
    <ThemeContext.Provider
      value={{
        handleTheme,
        BGIcolor,
        imgBG,
        Logo,
        BGcolor,
        Arrow,
        imgMenu,
        Cart
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
