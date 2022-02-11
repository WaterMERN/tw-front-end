import React from 'react'
import '../../css/expenseList.css'

function ExpenseListItem({expense}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  return (
    <div className="expense-item-containter" >
      <p>Category: {expense.category}</p>
      <p>Name: {expense.title}</p>
      <p>Cost: ${expense.cost}</p>
      <button className="remove-expense-button">Remove</button>
    </div>
  )
}

export default ExpenseListItem

// import React from 'react'

// function ExpenseListItem(expense) {
//   // take expense array from trip data and map through expenses 
//   // use state expenseList to set array for manipulation by add expense component
//   //button needs to delete expense item from expense list array with state update 
//   console.log(expense)
  
//   return (
//     <div className="expense-item-containter">
//       <p>category:{expense.category}</p>
//       <p>title:{expense.title}</p>
//       <p>cost:{expense.cost}</p>
//       <button className="remove-expense-button">Remove</button>
//     </div>
//   )
// }

// export default ExpenseListItem