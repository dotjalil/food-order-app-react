import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>ReactMeal</h1>
        <button>Cart</button>
      </header>
      <div>
        <img />
      </div>
    </React.Fragment>
  );
};

export default Header;
