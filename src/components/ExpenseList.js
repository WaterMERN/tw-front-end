import React from 'react'
import { List } from 'reactstrap'
import ExpenseListItem from './ExpenseListItem'

function ExpenseList({expenseList, setExpenseList}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  console.log(expenseList)
  return (
    <div>
    {expenseList.map((expense, idx) => {
      console.log(expense)
      return(
        <ExpenseListItem
        key={idx}
          category={ expense.category }
          title={ expense.title }
          cost={ expense.cost }
          />
        )
    })}


    </div>
  )


}

export default ExpenseList


{/* <div>
<p> { expense.category }</p>
<p> { expense.title }</p>
<p> { expense.cost }</p>
</div> */}