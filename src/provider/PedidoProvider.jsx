import React, { useState } from "react";
import { PedidoContext } from "../context/PedidoContext";
const PedidoProvider = ({ children }) => {
  const [activePedido, setActivePedido] = useState(false);
  const handleActivePedido = () => {
    setActivePedido(!activePedido);
  };
  return (
    <PedidoContext.Provider
      value={{
        handleActivePedido,
        activePedido
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoProvider;
