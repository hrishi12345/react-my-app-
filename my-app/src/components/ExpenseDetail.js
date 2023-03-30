function ExpenseDetails(props){
    return(
        <div>
            <div className='expense-item__description'></div>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
        
    )
}
export default ExpenseDetails;