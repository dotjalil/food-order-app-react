import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const noItems = cartCtx.items.reduce((prev, next) => {
    return next.amount + prev;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noItems}</span>
    </button>
  );
};

export default HeaderCartButton;
