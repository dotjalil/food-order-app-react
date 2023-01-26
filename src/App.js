import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
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
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCart} />}
      <Header onOpenCart={openCart} onCloseCart={closeCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
