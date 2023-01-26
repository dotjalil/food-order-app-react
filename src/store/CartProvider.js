import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const newItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === 'REMOVE_ITEM') {
  }
  return state;
}

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);

  function addCartItem(item) {
    dispatchCart({ type: 'ADD_ITEM', item: item });
  }

  function removeCartItem(id) {
    dispatchCart({ type: 'REMOVE_ITEM', id: id });
  }

  const ctxObject = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={ctxObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
