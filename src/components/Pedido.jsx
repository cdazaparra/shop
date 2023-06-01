import React, { useState } from "react";
import { useBuyContext } from "../context/BuyContext";
import "../styles/Pedido.sass";

const Pedido = (Cart) => {
  const { state } = useBuyContext();
  const { removeFromCart } = useBuyContext();
  const products = state["cart"];
  const cart = Cart;
  const [stateCantidad, setStateCantidad] = useState(0);
  const cantidades = () => {
    let inputValue = document.querySelectorAll("input");
    let valor = 0,
      descuento;
    for (let i = 0; i < inputValue.length; i++) {
      valor = valor + parseInt(inputValue[i].value);
    }
    setStateCantidad(valor);
  };

  return (
    <div className="Pedido">
      {products.map((product, index) => (
        <div key={index} className="PedidoContainer">
          <div className={product[0]}>
            <img
              src={product[2]}
              alt={product[1]}
              className="PedidoContainerImg"
            ></img>
          </div>
          <input
            type="text"
            className="PedidoContainerValue"
            placeholder="Cantidad"
            required
          ></input>
          <button onClick={() => removeFromCart(product, index)}>
            Eliminar
          </button>
          {/* {product[0]} - {product[1]}- {product[2]} */}
        </div>
      ))}
      <button onClick={() => cantidades()}>Calcular</button>
      <div>Valor={" $" + stateCantidad * 35000}</div>
      <div>Cantidad={stateCantidad}</div>
      {stateCantidad < 9 && <div>Descuento= 0%</div>}
      {stateCantidad >= 10 && <div>Descuento= 20%</div>}
      {stateCantidad < 9 && <div>Total={" $" + stateCantidad * 35000}</div>}
      {stateCantidad >= 10 && (
        <div>Total={" $" + stateCantidad * 35000 * 0.8}</div>
      )}
    </div>
  );
};

export default Pedido;
