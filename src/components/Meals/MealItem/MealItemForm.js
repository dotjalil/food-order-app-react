import React, { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  function addItemHandler(event) {
    event.preventDefault();
    props.onAddItem(amount);
  }

  function handleSetAmount(amount) {
    setAmount(amount);
  }

  return (
    <form className={classes.form}>
      <Input
        onSetAmount={handleSetAmount}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
        }}
      />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
