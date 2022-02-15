  import React from 'react'
  import { List } from 'reactstrap'
  import ExpenseListItem from './ExpenseListItem'

  function ExpenseList({expenseList, setExpenseList}) {
    // take expense array from trip data and map through expenses 
    // use state expenseList to set array for manipulation by add expense component
    //button needs to delete expense item from expense list array with state update 
    // console.log(expenseList)
    const removeExpense = (expense) => {
      let expenseToDelete = expenseList.filter(item => {
        console.log(item.title)
        // console.log(expense.title)
        console.log(expense)
        return item.title !== expense
      }) 
      console.log(expenseToDelete)
      setExpenseList(expenseToDelete)
    }

    return (
      <>
      {expenseList.map(expense => {
        return(
        <div>
          <ExpenseListItem  
            expense={expense}
            title={expense.title}
            cost={expense.cost}
            category={expense.category}
            removeExpense={removeExpense}
            />
          
          </div>  )
        
      })}
      </>
    )


  }

  export default ExpenseList

