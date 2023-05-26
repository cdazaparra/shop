import { createContext, useContext } from "react";

export const BuyContext = createContext();
export const useBuyContext = () => {
  return useContext(BuyContext);
};
