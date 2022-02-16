    import React, { useEffect } from 'react'
    import { FormGroup, Label, Input, Form, Row} from 'reactstrap'
    import { useState } from 'react'
    import '../../css/addexpenseitem.css'
    import Totals from '../Totals'



    function AddExpenseItem({ expenseList, setExpenseList, totalCost, setTotalCost}) {
        // const [expenseItem, setExpenseItem] = useState()
        const [itemCategory, setItemCategory] = useState('')
        const [itemCost, setItemCost] = useState(0)
        const [itemTitle, setItemTitle] = useState('')
    
        let foodTotal = 0
        let transportationTotal = 0
        let lodgingTotal = 0
        let  otherTotal = 0 
        const countCategoryTotals = () => { 

        let foodArray = expenseList.filter((item) => {
            if (item.category === "Food") return item
        })
      
        let transportationArray = expenseList.filter((item) => {
            if (item.category === "Transportation") return item
        })
     
        let lodgingArray = expenseList.filter((item) => {
            if (item.category === "Lodging") return item
        })
    
        let otherArray = expenseList.filter((item) => {
         
                if (item.category === "Other") return item
            
        })
    
        
        foodArray.forEach(item => {
            let newItem = parseInt(item.cost)
            foodTotal += newItem
            return foodTotal
        })
        transportationArray.forEach(item => {
            let newItem = parseInt(item.cost)
            transportationTotal += newItem
            return transportationTotal
        })
        lodgingArray.forEach(item => {
            let newItem = parseInt(item.cost)
            lodgingTotal += newItem
            return lodgingTotal
        })
        otherArray.forEach(item => {
            let newItem = parseInt(item.cost)
            otherTotal += newItem
            return otherTotal
        })
        
        }
    countCategoryTotals()
    
        const addExpense = () => {
            const newItem = ({
                category: itemCategory,
                title: itemTitle,
                cost: itemCost
            });
            setExpenseList([...expenseList,newItem]);
            console.log(expenseList, "list of expenses");
            console.log(newItem, "item");

        };

        let currentTotal = 0;
        const calculateTotal = () => {
            expenseList.forEach(item =>{
                let newItem = parseInt(item.cost);
                currentTotal += newItem});
                setTotalCost(currentTotal);
                return currentTotal
        }
        calculateTotal()
        return (
            <div className="add-expense-container">
                <h4 className="add-expense-title">Add Your Expenses Here: </h4>
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
                            onChange={(event) => { setItemCategory(event.target.value) }}>
                                <option>Choose Type</option>
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
                                onChange={(event) => { setItemCost(event.target.value) }}
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
                <Totals lodgingTotal={lodgingTotal} otherTotal={otherTotal} foodTotal={foodTotal} transportationTotal={transportationTotal} expenseTotal={totalCost}/>

            </div>
        )
    }

    export default AddExpenseItem


    