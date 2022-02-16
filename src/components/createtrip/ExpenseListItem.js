import React from 'react'
import '../../css/expenseList.css'

function ExpenseListItem({ removeExpense, expense, removeItem }) {
  return (
    <div className="expense-item-containter" >
      <p>Category: {expense.category}</p>
      <p>Name: {expense.title}</p>
      <p>Cost: ${expense.cost}</p>
      <button className="remove-expense-button" onClick={() => {removeExpense(expense.title)}}>Remove</button>
    </div>
  )
}

export default ExpenseListItem
