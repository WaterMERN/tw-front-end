import React from 'react'
import { List } from 'reactstrap'
import { useState } from 'react'
import ListItem from './ListItem'

function BudgetList() {
    const [list, setList] = useState([{
        food: 'test'
    }])
    const [newItem, setnewItem] = useState([])

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
                {list.map(item => {
                    return (
                        // <div>{item.food}</div>
                        <ListItem list={item}/>
                    )
                }
                )}
                </div> 
            </div>
        </div>
    )
}

export default BudgetList