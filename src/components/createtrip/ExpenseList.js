import React from 'react'
import { List } from 'reactstrap'
import ExpenseListItem from './ExpenseListItem'

function ExpenseList({expenseList, setExpenseList}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  // console.log(expenseList)
  return (
    <>
    {expenseList.map(expense => {
      return(
        <ExpenseListItem  
          expense={expense}
          title={expense.title}
          cost={expense.cost}
          category={expense.category}
          />
        )
    })}
    </>
  )


}

export default ExpenseList

