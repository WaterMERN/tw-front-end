import React from 'react'

function ExpenseListItem({expense}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  return (
    <div className="expense-item-containter">
      <p>{expense.category}</p>
      <p>{expense.title}</p>
      <p>{expense.cost}</p>
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