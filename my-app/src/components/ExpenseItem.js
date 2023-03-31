import React, { useRef } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const cardRef = useRef(null);

  const deleteButtonHandler = () => {
    cardRef.current.parentNode.removeChild(cardRef.current);
  }

  return (
    <Card className='expense-item' ref={cardRef}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={deleteButtonHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
