import React, { useState } from "react";
import { designsGame } from "../helpers/data";
import { BuyContext } from "../context/BuyContext";
const BuyProvider = ({ children }) => {
  const [state, setState] = useState(designsGame);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id)
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
