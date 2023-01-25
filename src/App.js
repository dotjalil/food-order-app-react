import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}
