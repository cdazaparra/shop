import React from "react";
import "../styles/Menu.sass";
import BtnMenuMobile from "./btnMenuMobile";
import Theme from "./Theme";
import ArrowUp from "./ArrowUp";
import LinkMobile from "./LinkMobile";
//Context
import { useLinkContex } from "../context/LinkContex";
import { useThemeContext } from "../context/ThemeContext";
import { useBuyContext } from "../context/BuyContext";
import { usePedidoContext } from "../context/PedidoContext";
import Pedido from "./Pedido";
const MenuMobile = () => {
  const { state } = useBuyContext();
  const { cart } = state;
  const { BGIcolor } = useThemeContext();
  const { Logo } = useThemeContext();
  const { Cart } = useThemeContext();
  const { active } = useLinkContex();
  const { activePedido } = usePedidoContext();
  const { handleActivePedido } = usePedidoContext();
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
          <div className="MenuMobileCartContainer">
            <img
              className="MenuMobileCartImg"
              src={Cart}
              alt="Carro de compras"
              onClick={handleActivePedido}
            ></img>
            <div className="MenuMobilePedido">
              <div>Pedido:</div>
              {cart.length > 0 && (
                <div className="Header-alert">{cart.length}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BtnMenuMobile></BtnMenuMobile>
      <Theme></Theme>
      <ArrowUp></ArrowUp>
      {active && <LinkMobile></LinkMobile>}
      {activePedido && <Pedido Cart={Cart}></Pedido>}
      {/* {console.log(activePedido)} */}
      {/* <div className="Menu Desktop">
        <h2>Hola menu</h2>
      </div> */}
    </>
  );
};

export default MenuMobile;
