import React from "react";
import "../styles/Menu.sass";
import Cart from "../assets/icons/carrito.png";
import BtnMenuMobile from "./btnMenuMobile";
import Theme from "./Theme";
import ArrowUp from "./ArrowUp";
import LinkMobile from "./LinkMobile";
//Context
import { useLinkContex } from "../context/LinkContex";
import { useThemeContext } from "../context/ThemeContext";
import { useBuyContext } from "../context/BuyContext";
const MenuMobile = () => {
  const { state } = useBuyContext();
  const { cart } = state;
  const { BGIcolor } = useThemeContext();
  const { Logo } = useThemeContext();
  const { active } = useLinkContex();
  return (
    <>
      <div className={BGIcolor}>
        <div className="MenuMobileLogo">
          <img
            className="MenuMobileLogoImg"
            src={Logo}
            alt="Loco DC Corporation"
          ></img>
        </div>
        <div className="MenuMobileCart">
          <img
            className="MenuMobileCartImg"
            src={Cart}
            alt="Carro de compras"
          ></img>
          <p>
            cant:
            {cart.length > 0 && (
              <div className="Header-alert">{cart.length}</div>
            )}
          </p>
        </div>
      </div>
      <BtnMenuMobile></BtnMenuMobile>
      <Theme></Theme>
      <ArrowUp></ArrowUp>
      {active && <LinkMobile></LinkMobile>}
      {/* <div className="Menu Desktop">
        <h2>Hola menu</h2>
      </div> */}
    </>
  );
};

export default MenuMobile;
