import { useContext } from "react";
import { BuyContext } from "../context/";
const useBuyContext = () => {
  useContext(BuyContext);
};

export default useBuyContext;
