import React from 'react'
import { List } from 'reactstrap'
import { useState } from 'react'
import ListItem from './ListItem'

function BudgetList() {
    const [list, setList] = useState({
        name: ''
    })

<<<<<<< HEAD
    
const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.value)
      }
=======
    const handleChange = (event) => {
        const { name, value } = event.target
        setList(prevList => {
            return {
                ...prevList,
                [name]: value
            }
        })
        console.log(value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        const newItem = {
            item: list.item
        }
        setList({ ...list, newItem })
    }
    // console.log(list)
>>>>>>> origin/danny
    return (
        <div>
            <div>BudgetList</div>

            <div>
                <div for="exampleNumber">
                    Food
                </div>
                <input
                    onChange={handleChange}
                    value={list.item}
                    name="food"
                    type="text"
                    placeholder="food item"
                />
                <button onClick={handleClick} type="submit">Add</button>
                {/* {list.map(item => (
                    <ListItem item={item.name}/>
                ))} */}
            </div>
        </div>
    )
}

export default BudgetList