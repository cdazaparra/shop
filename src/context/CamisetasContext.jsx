import { createContext, useContext } from "react";

export const CamisetasContext = createContext();
export const useCamisetasContext = () => {
  return useContext(CamisetasContext);
};
