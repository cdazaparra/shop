import React from "react";
import "../styles/Pedir.sass";
import { useBuyContext } from "../context/BuyContext";
const Pedir = (camiseta) => {
  const tshirt = camiseta["camiseta"];
  const { addToCart } = useBuyContext();
  const id = 1;

  return (
    <div className="ImagenComprar" onClick={() => addToCart(tshirt, id)}>
      Pedir
    </div>
  );
};

export default Pedir;
