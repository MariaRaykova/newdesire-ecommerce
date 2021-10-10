import React from "react";

const CartContext = React.createContext({
  products: null,
  quantity: 0,
  // index: 0,
  addProduct: () => {},
  clearCart: () => {}
});

export default CartContext;
