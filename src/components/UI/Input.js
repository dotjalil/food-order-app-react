import React, { useState } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const [amount, setAmount] = useState(1);

  function onChangeHandler(event) {
    setAmount(event.target.value);
    props.onSetAmount(event.target.value);
  }

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        defaultValue={amount}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
