import React from 'react'
import { Card, List } from 'reactstrap'
import '../../css/expenseList.css'

const TripCardExpenses = ({ tripExpenses}) => {

  return (
    <div>
    {tripExpenses.map(expense => {
      return(
          <Card className='individual-expense' key={expense.title}>
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