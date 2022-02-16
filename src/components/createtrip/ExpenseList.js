  import React from 'react'
  import ExpenseListItem from './ExpenseListItem'

  function ExpenseList({expenseList, setExpenseList}) {
    const removeExpense = (expense) => {
      let expenseToDelete = expenseList.filter(item => {
        return item.title !== expense
      }) 
      setExpenseList(expenseToDelete)
    }

    return (
      <>
      {expenseList.map(expense => {
        return(
        <div key= {expense.title} >
          <ExpenseListItem  
           key = {expense}
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

