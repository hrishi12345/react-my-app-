import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate'; 
import ExpenseDetails from './ExpenseDetail';
function ExpenseItem(props) {


  return (
    <div className='expense-item'>
     <ExpenseDate  date={props.date}/>
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  );
}

export default ExpenseItem;