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
        if (itemCategory === "Food"){
            setFoodTotal(foodTotal + parseInt(itemCost))
        } 
        if (itemCategory === "Transportation"){
            setTransportationTotal(transportationTotal + parseInt(itemCost))
        } 
        if (itemCategory === "Other"){
            setOtherTotal(otherTotal + parseInt(itemCost))
        } 
        if (itemCategory === "Lodging"){
            setLodgingTotal(lodgingTotal + parseInt(itemCost))
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
                        value={expenseList.category}
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


