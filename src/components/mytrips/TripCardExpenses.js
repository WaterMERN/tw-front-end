import React from 'react'
import { Card, List } from 'reactstrap'
import ExpenseListItem from '../ExpenseListItem'
import '../../css/expenseList.css'

const TripCardExpenses = ({ tripExpenses}) => {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  // console.log(expenseList)
  return (
    <div>
    {tripExpenses.map(expense => {
      return(
          <Card className='individual-expense'>
            <p className='labels'>Category: <span>{ expense.category }</span></p>
            <p className='labels'>Name: <span>{ expense.title }</span></p>
            <p className='labels'>Cost: <span>${ expense.cost } </span></p>
          </Card>
        )
    })}
    </div>
  )


}

export default TripCardExpenses