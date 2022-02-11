import React from 'react'
import { List, FormGroup, Label, Input, Form, Row, Card } from 'reactstrap'
import { useState } from 'react'
import '../../css/addexpenseitem.css'
import Totals from '../Totals'

//state for this component is: 


function AddExpenseItem({ expenseList, setExpenseList, totalCost, setTotalCost}) {
    // console.log(expenseList)
    const [expenseItem, setExpenseItem] = useState()
    const [itemCategory, setItemCategory] = useState('')
    const [itemCost, setItemCost] = useState(0)
    const [itemTitle, setItemTitle] = useState('')
    const [foodTotal, setFoodTotal] =useState(0)
    const [lodgingTotal, setLodgingTotal]= useState(0)
    const [transportationTotal, setTransportationTotal]=useState(0)
    const [otherTotal, setOtherTotal] =useState(0)

    // console.log(itemCategory)
    // console.log(itemCost)
    // console.log(itemTitle)

    // console.log(expenseItem)

    const countTotals = () => {
        let food = expenseList.filter(item => item.category === "Food")
        let transportation = expenseList.filter(item => item.category === "Transportation" )
        let lodging = expenseList.filter(item => item.category === "Lodging" )
        let other = expenseList.filter(item => item.category === "Other" )
        console.log(food, 'This is food')
            if(food){
                setFoodTotal(foodTotal + parseInt(itemCost))
            }
            if (transportation){
                setTransportationTotal(transportationTotal + parseInt(itemCost)) 
            }
            if(lodging) {
                setLodgingTotal(lodgingTotal + parseInt(itemCost))
            } 
            if(other){
                setOtherTotal(otherTotal + parseInt(itemCost))
            }
        }

    const addExpense = () => {
        const newItem = ({
            category: itemCategory,
            title: itemTitle,
            cost: itemCost
        })
        setExpenseList([...expenseList,newItem])
        console.log(expenseList, "list of expenses")
        console.log(newItem, "item")
        countTotals()
        console.log(itemCost)

        }

   
        
        

        // console.log(item.cateogry)


    // const countTotals = (event) => {
    //     setItemCost(event.target.value)
    //     if(expenseList.category === "Food"){
    //         setFoodTotal(foodTotal + event.target.value)
    //     }
    //     console.log(event.target.value)
    // }

    let currentTotal = 0
    const calculateTotal = () => {
        expenseList.forEach(item =>{
            let newItem = parseInt(item.cost)
            currentTotal += newItem})
            setTotalCost(currentTotal)
            // console.log(totalCost)
            return currentTotal
    }
    calculateTotal()



   


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
                            onChange={(event)=>{ setItemCost(event.target.value)}}
                            id="cost"
                            name="budget"
                            placeholder="budget"
                            type="text"
                        />
                    </FormGroup>
                </Form> 
                <button type="submit" onClick={addExpense}> Add Expense </button> 
            </Row>
            <Totals lodgingTotal={lodgingTotal} otherTotal={otherTotal} foodTotal={foodTotal} transportationTotal={transportationTotal}/>

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
