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
        // const [foodTotal, setFoodTotal] =useState(0)
        // const [lodgingTotal, setLodgingTotal]= useState(0)
        // const [transportationTotal, setTransportationTotal]=useState(0)
        // const [otherTotal, setOtherTotal] =useState(0)
        // const [expenseTotal, setExpenseTotal] = useState(0)

        // console.log(itemCategory)
        // console.log(itemCost)
        // console.log(itemTitle)
        let foodTotal = 0
        let transportationTotal = 0
        let lodgingTotal = 0
        let  otherTotal = 0 
        const countCategoryTotals = () => { // console.log(expenseItem)

        let foodArray = expenseList.filter((item) => {
            if (item.category === "Food") return item
        })
        // console.log(foodArray)
        let transportationArray = expenseList.filter((item) => {
            if (item.category === "Transportation") return item
        })
        // console.log(transportationArray)
        let lodgingArray = expenseList.filter((item) => {
            if (item.category === "Lodging") return item
        })
        // console.log(lodgingArray)
        let otherArray = expenseList.filter((item) => {
            if (item.category === "Other") return item
        })
        // console.log(otherArray)
        
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
        //     if (itemCategory === "Food"){
        //         setFoodTotal(foodTotal + parseInt(itemCost))
        //     } 
        //     if (itemCategory === "Transportation"){
        //         setTransportationTotal(transportationTotal + parseInt(itemCost))
        //     } 
        //     if (itemCategory === "Other"){
        //         setOtherTotal(otherTotal + parseInt(itemCost))
        //     } 
        //     if (itemCategory === "Lodging"){
        //         setLodgingTotal(lodgingTotal + parseInt(itemCost))
        //     } 
        //     setExpenseTotal(foodTotal + transportationTotal + otherTotal + lodgingTotal + parseInt(itemCost))
        // } 
        // countTotals()
        const addExpense = () => {
            const newItem = ({
                category: itemCategory,
                title: itemTitle,
                cost: itemCost
            });
            setExpenseList([...expenseList,newItem]);
            console.log(expenseList, "list of expenses");
            console.log(newItem, "item");
            
            // console.log(itemCost)
        };
        let currentTotal = 0;
        const calculateTotal = () => {
            expenseList.forEach(item =>{
                let newItem = parseInt(item.cost);
                currentTotal += newItem});
                setTotalCost(currentTotal);
                // console.log(totalCost)
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
