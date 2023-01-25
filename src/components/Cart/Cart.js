import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul>{[{ id: 'c1', name: 'Sushi', price: 12.99 }]}</ul>;
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>$33.99</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
