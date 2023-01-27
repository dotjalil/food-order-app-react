import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // check if the item exists in the cart
    // if true, check how many on cart
    // and check how many on action
    // then store the summation
    // if no, add new item
    const existentItem = state.items.find((item) => item.id === action.item.id);

    if (existentItem) {
      // do not mutate state items
      // create new items always
      // Creating new item instead of mutating the returned one from the state
      const updatedEsistentItem = {
        name: existentItem.name,
        id: existentItem.id,
        amount: Number(existentItem.amount) + Number(action.item.amount),
        price: existentItem.price,
      };
      // creating new array
      // by copying the state item and execluding the one than needs to be updated
      var newItems = state.items.filter((item) => item.id != action.item.id);
      // creating new array and adding the updated item to it
      newItems = newItems.concat(updatedEsistentItem);
    } else {
      var newItems = state.items.concat(action.item);
    }
    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === 'REMOVE_ITEM') {
    // check the item amount
    // if > 1, --
    // if === 1, remove from array
    const existentItem = state.items.find((item) => item.id === action.id);
    if (existentItem.amount > 1) {
      const updatedItem = {
        ...existentItem,
        amount: existentItem.amount - 1,
      };
      let newItems = state.items.filter((item) => item.id != action.id);
      newItems = newItems.concat(updatedItem);
      const newTotalAmount =
        Number(state.totalAmount) - Number(existentItem.price);
      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };
    } else {
      let newItems = state.items.filter((item) => item.id != action.id);
      let newTotalAmount =
        Number(state.totalAmount) - Number(existentItem.price);
      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };
    }
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
