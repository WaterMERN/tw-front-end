import React from 'react'
import '../../css/expenseList.css'
import { useState } from 'react'
import '../../css/CreateTrip.css'


function ExpenseListItem({ removeExpense, expense, removeItem }) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
//  console.log(expense)

  return (
    <div className="expense-item-containter" >
      <p><span className="expense-item">Type:</span> {expense.category}</p>
      <p><span className="expense-item">Description:</span>{expense.title}</p>
      <p><span className="expense-item">Cost:</span> ${expense.cost}</p>
      {/* <button className="remove-expense-button" onClick={() => {removeExpense(expense.title)}}>Remove</button> */}
    </div>
  )
}

export default ExpenseListItem

