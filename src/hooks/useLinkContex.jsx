import { useContext } from "react";
import { LinkContex } from "../context/LinkContex";
const useLinkContex = () => {
  useContext(LinkContex);
};

export default useLinkContex;
