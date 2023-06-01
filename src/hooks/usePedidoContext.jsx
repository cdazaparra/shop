import { useContext } from "react";
import { PedidoContext } from "../context/";
const usePedidoContext = () => {
  useContext(PedidoContext);
};

export default usePedidoContext;
