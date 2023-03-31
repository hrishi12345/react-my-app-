import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle,setitle]=useState('')
  const [enteredAmount,setAmount]=useState('')
  const [enteredDate,setDate]=useState('')
  const TitleChange=(event)=>{
     setitle(event.target.value)
  }
  const AmountChange=(event)=>{
    setAmount(event.target.value)
    
 }
 const DateChange=(event)=>{
  setDate(event.target.value)
  
}
  const send=(event)=>{
    event.preventDefault()
    const data={
      title:enteredTitle,
      amount:enteredAmount,
      date:enteredDate
    }
    console.log(data)
    setitle('')
    setAmount('')
    setDate('')
    
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={TitleChange} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={AmountChange} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChange} value={enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={send}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
