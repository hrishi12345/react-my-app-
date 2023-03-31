import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const Save=(enteredData)=>{
        const data1={
          ...enteredData,

        }
        props.onSaveChange2(data1)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveChange={Save}/>
    </div>
  );
};

export default NewExpense;