import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import './style.css';

export default function App() {
  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  return (
    <React.Fragment>
      {showCart && <Cart onCloseCart={closeCart} />}
      <Header onOpenCart={openCart} onCloseCart={closeCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}
