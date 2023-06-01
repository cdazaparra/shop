import { createContext, useContext } from "react";

export const PedidoContext = createContext();
export const usePedidoContext = () => {
  return useContext(PedidoContext);
};
