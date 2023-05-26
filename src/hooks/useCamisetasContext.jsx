import { useContext } from "react";
import { CamisetasContext } from "../../context/CamisetasContext";
const useCamisetasContext = () => {
  useContext(CamisetasContext);
};

export default useCamisetasContext;
