import React from 'react'
import { List, FormGroup, Label, Input, Form, Row } from 'reactstrap'
import { useState } from 'react'

//state for this component is: 


function AddExpenseItem({ expenseList, setExpenseList }) {
    // console.log(expenseList)
    const [expenseItem, setExpenseItem] = useState()
    const [itemCategory, setItemCategory] = useState('')
    const [itemCost, setItemCost] = useState(0)
    const [itemTitle, setItemTitle] = useState('')
    console.log(itemCategory)
    console.log(itemCost)
    console.log(itemTitle)

    // console.log(expenseItem)
    
    const addExpense = () => {
        setExpenseItem({
            category: itemCategory,
            title:  itemTitle,
            cost: itemCost
        })
        setExpenseList([...expenseList,expenseItem])
        setItemCost('')
        setItemTitle('')
        console.log(expenseList, "list of expenses")
        console.log(expenseItem, "item")
    }
    
    return (
        <div>
            <h4>Add Expense Item</h4>
            <Row>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Type
                        </Label>
                        <Input 
                        id="exampleSelect" 
                        name="select" 
                        type="select" 
                        onChange={(event) => { setItemCategory(event.target.value) }}>
                            <option>Choose Type</option>
                            <option>Food</option>
                            <option>Lodging</option>
                            <option>Transportation</option>
                            <option>Other</option>
                        </Input>
                        <Label>
                            Title
                        </Label>
                        <Input
                            onChange={(event) => { setItemTitle(event.target.value) }}
                            id="category"
                            name="budget"
                            placeholder="budget"
                            type="text"
                        />
                        <Label>
                            Cost
                        </Label>
                        <Input
                            onChange={(event) => { setItemCost(event.target.value) }}
                            id="cost"
                            name="budget"
                            placeholder="budget"
                            type="text"
                        />
                    </FormGroup>
                </Form> 
                <button type="submit" onClick={addExpense}> Add Expense </button> 
            </Row>

        </div>
    )
}

export default AddExpenseItem


// const [expenseList, setExpenseList] = useState([{
//     food: 'test'
// }])
// const [newItem, setnewItem] = useState([])

// // expenseList State {
// //     category: from drop
// //     Title: from input field
// //     cost: from input
// //   } // to be answered shortly
// // change to drop down list for expense categories to add to expense list state

// const handleChange = (event) => {
//     // const { name, value } = event.target
//     setnewItem(
//         event.target.value
//     )
//     console.log(newItem)
// }

// const handleClick = (event) => {
//     event.preventDefault()
//     const newThing = {
//         food: newItem
//     }
//     setList([ ...list, newThing ])
//     console.log(list)
// }
// <div>
// <div for="exampleNumber">
//     Food
// </div>
// <input
//     onChange={handleChange}
//     value={list.food}
//     name="food"
//     type="text"
//     placeholder="food item"
// />
// <button onClick={handleClick} type="submit">Add</button>
// <div className='list-container'>
// {/* MOVE TO EXPENSE LIST COMPONENT */}
// {list.map(item => {
//     return (
//         <div>test</div>
//         // <ExpenseListItem list={item}/>
//     )
// }
//     )}
// </div>
// </div>
