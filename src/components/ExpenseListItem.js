import React from 'react'
import { List } from 'reactstrap'

function ListItem({list}) {
  // take expense array from trip data and map through expenses 
  // use state expenseList to set array for manipulation by add expense component
  //button needs to delete expense item from expense list array with state update 
  return (
    <div>
        <div>{list.food}</div>
        <button>X</button>
    </div>
  )
}

export default ListItem