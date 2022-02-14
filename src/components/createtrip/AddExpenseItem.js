import React from 'react'
import { List, FormGroup, Label, Input, Form, Row, Card } from 'reactstrap'
import { useState } from 'react'
import '../../css/addexpenseitem.css'
import Totals from '../Totals'
import '../../css/CreateTrip.css'


//state for this component is: 
// lodgingTotal={lodgingTotal} setLodgintTotal={setLodgingTotal} setOtherTotal={setOtherTotal} otherTotal={otherTotal} setFoodTotal={setFoodTotal} foodTotal={foodTotal} setTransportationTotal={setTransportationTotal} transportationTotal={transportationTotal} setExpenseTotal={setExpenseTotal} expenseTotal={expenseTotal}



function AddExpenseItem({lodgingTotal, setLodgingTotal,otherTotal, setOtherTotal, foodTotal, setFoodTotal, transportationTotal, setTransportationTotal, expenseTotal,setExpenseTotal, expenseList, setExpenseList, totalCost, setTotalCost, expenseItem, setExpenseItem, itemCategory, setItemCategory, itemCost, setItemCost, itemTitle, setItemTitle}) {
    console.log(expenseList)
    // const [expenseItem, setExpenseItem] = useState()
    // const [itemCategory, setItemCategory] = useState('')
    // const [itemCost, setItemCost] = useState(0)
    // const [itemTitle, setItemTitle] = useState('')
    // const [foodTotal, setFoodTotal] =useState(0)
    // const [lodgingTotal, setLodgingTotal]= useState(0)
    // const [transportationTotal, setTransportationTotal]=useState(0)
    // const [otherTotal, setOtherTotal] =useState(0)
    // const [expenseTotal, setExpenseTotal] = useState(0)

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
        setExpenseTotal(foodTotal + transportationTotal + otherTotal + lodgingTotal + parseInt(itemCost))
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


    return (
        <div className="add-expense-container">
            <h3 className="add-expense-title">Add Your Expenses Here:</h3>
            <Row>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Type
                        </Label>
                        <Input 
                        className="add-expense-input"
                        id="exampleSelect" 
                        name="select" 
                        type="select" 
                        value={expenseList.category}
                        onChange={(event) => { setItemCategory(event.target.value) }}>
                            <option>Select Type</option>
                            <option>Food</option>
                            <option>Lodging</option>
                            <option>Transportation</option>
                            <option>Other</option>
                        </Input>
                        <Label>
                            Description
                        </Label>
                        <Input
                        className="add-expense-input"
                            onChange={(event) => { setItemTitle(event.target.value) }}
                            id="category"
                            name="budget"
                            placeholder="description"
                            type="text"
                        />
                        <Label>
                            Cost
                        </Label>
                        <Input
                            className="add-expense-input"
                            onChange={(event)=>{ setItemCost(event.target.value)}}
                            id="cost"
                            name="budget"
                            placeholder="budget"
                            type="text"
                        />
                    </FormGroup>
                </Form> 
                <div className="add-expense-button-container">
                <button className="add-expense-button" type="submit" onClick={addExpense}> Add Expense </button> 
                </div>
            </Row>
            <Totals className="totals-component"lodgingTotal={lodgingTotal} otherTotal={otherTotal} foodTotal={foodTotal} transportationTotal={transportationTotal} expenseTotal={expenseTotal}/>
        </div>
    )
}

export default AddExpenseItem


