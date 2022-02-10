import React from 'react'
import { List } from 'reactstrap'
import { useState } from 'react'

function AddExpenseItem() {
    const [list, setList] = useState([{
        food: 'test'
    }])
    const [newItem, setnewItem] = useState([])

    // expenseItem State {
    //     category: from drop 
    //     Title: from input field
    //     cost: from input 
    //   } // to be answered shortly 
    // change to drop down list for expense categories to add to expense list state 

    const handleChange = (event) => {
        // const { name, value } = event.target
        setnewItem(
            event.target.value
        )
        console.log(newItem)
    }

    const handleClick = (event) => {
        event.preventDefault()
        const newThing = {
            food: newItem
        }
        setList([ ...list, newThing ])
        console.log(list)
    }
    return (
        <div>
            <div>BudgetList</div>

            <div>
                <div for="exampleNumber">
                    Food
                </div>
                <input
                    onChange={handleChange}
                    value={list.food}
                    name="food"
                    type="text" 
                    placeholder="food item"
                />
                <button onClick={handleClick} type="submit">Add</button>
                <div className='list-container'>
               {/* MOVE TO EXPENSE LIST COMPONENT */}
                {list.map(item => {
                    return (
                        <div>test</div>
                        // <ExpenseListItem list={item}/>
                    )
                } 
                  )} 
                </div> 
            </div>
        </div>
    )
}

export default AddExpenseItem
