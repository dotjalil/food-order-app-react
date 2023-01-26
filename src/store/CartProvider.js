import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const ctxObject = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  return (
    <CartContext.Provider value={ctxObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
