import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const noItems = cartCtx.items.reduce((prev, next) => {
    return Number(next.amount) + prev;
  }, 0);

  const [bumpBtn, setBumpBtn] = useState(false);

  const btnClasses = `${classes.button} ${bumpBtn ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBumpBtn(true);

    const bumpTimer = setTimeout(() => {
      setBumpBtn(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noItems}</span>
    </button>
  );
};

export default HeaderCartButton;
