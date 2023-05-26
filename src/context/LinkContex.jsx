import { createContext, useContext } from "react";

export const LinkContex = createContext();
export const useLinkContex = () => {
  return useContext(LinkContex);
};
