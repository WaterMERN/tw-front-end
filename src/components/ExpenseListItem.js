import React from 'react'
import '../css/ExpenseListItem.css'
function ExpenseListItem({expense, category, title, cost}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  console.log(expense)
  return (
    <div className="expense-item-container">
      <p> {`category:${category}`}</p>
      <p>{`title: ${title}`}</p>
      <p> {`cost: $${cost}`}</p>
      <button>X</button>
    </div>
  )
}

export default ExpenseListItem