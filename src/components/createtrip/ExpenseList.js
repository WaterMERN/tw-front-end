  import React from 'react'
  import { List } from 'reactstrap'
  import ExpenseListItem from './ExpenseListItem'
  import '../../css/CreateTrip.css'

  function ExpenseList({lodgingTotal, setLodgingTotal, otherTotal, setOtherTotal, foodTotal, setFoodTotal, transportationTotal, setTransportationTotal, expenseTotal, setExpenseTotal, expenseList, setExpenseList, totalCost, setTotalCost}, itemCategory, setItemCategory, itemCost, setItemCost, itemTitle, setItemTitle) {
    // take expense array from trip data and map through expenses 
    // use state expenseList to set array for manipulation by add expense component
    //button needs to delete expense item from expense list array with state update 
    // console.log(expenseList)

    const subtractTotals = () => {
      if (itemCategory === "Food"){
          setFoodTotal(foodTotal - parseInt(itemCost))
      } 
      if (itemCategory === "Transportation"){
          setTransportationTotal(transportationTotal - parseInt(itemCost))
      } 
      if (itemCategory === "Other"){
          setOtherTotal(otherTotal - parseInt(itemCost))
      } 
      if (itemCategory === "Lodging"){
          setLodgingTotal(lodgingTotal - parseInt(itemCost))
      } 
      // setFoodTotal(foodTotal - parseInt(itemCost) )
      setExpenseTotal(expenseTotal - foodTotal || lodgingTotal || otherTotal || transportationTotal)
      // setExpenseTotal(foodTotal - transportationTotal - otherTotal - lodgingTotal - parseInt(itemCost))
  } 

    const removeExpense = (expense) => {
      let expenseToDelete = expenseList.filter(item => {
        console.log(item.title)
        // console.log(expense.title)
        console.log(expense)
        return item.title !== expense
      }) 
      console.log(expenseToDelete)
      setExpenseList(expenseToDelete)
      subtractTotals()
    }






    return (
      <>
      {expenseList.map(expense => {
        return(
        <div className="expense-list-container">
          <ExpenseListItem  
            expense={expense}
            title={expense.title}
            cost={expense.cost}
            category={expense.category}
            // removeExpense={removeExpense}
            />
      <button className="remove-expense-button" onClick={() => {removeExpense(expense.title)}}>Remove</button>         
          </div>  )
        
      })}
      </>
    )


  }

  export default ExpenseList

