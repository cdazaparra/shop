import React, { useState } from "react";
import { designsGame } from "../helpers/data";
import { BuyContext } from "../context/BuyContext";
const BuyProvider = ({ children }) => {
  const [state, setState] = useState(designsGame);
  const addToCart = (payload) => {
    const result = [],
      uniqueArr = [];
    const estado = (state) => {
      state.forEach((item) => {
        if (uniqueArr.includes(item)) {
          console.log("uniqueArr: ", uniqueArr);
        } else {
          uniqueArr.push(item);
          console.log("uniqueArr: ", uniqueArr);
        }
      });
    };

    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };
  console.log(state);
  const removeFromCart = (product, index) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item !== product)
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    });
  };
  return (
    <BuyContext.Provider
      value={{
        addToCart,
        removeFromCart,
        addToBuyer,
        state
      }}
    >
      {children}
    </BuyContext.Provider>
  );
};

export default BuyProvider;
