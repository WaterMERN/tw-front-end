  import React, { useEffect } from 'react';
  import { Form, FormGroup, Label, Input } from 'reactstrap';
  import { useState } from 'react';
  import axios from "axios"
  import ExpenseList from './ExpenseList';
  import AddExpenseItem from './AddExpenseItem';
  import BodyNav from '../BodyNav';
  import Totals from '../Totals';
  import '../../css/CreateTrip.css'

  function CreateTrip() {
    const [tripName, setTripName] =useState('')
    const [tripBudget, setTripBudget] =useState(0)
    const [tripLength, setTripLength] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [expenseList, setExpenseList] = useState([])

    const [expenseItem, setExpenseItem] = useState()
    const [itemCategory, setItemCategory] = useState('')
    const [itemCost, setItemCost] = useState(0)
    const [itemTitle, setItemTitle] = useState('')

    const [foodTotal, setFoodTotal] =useState(0)
    const [lodgingTotal, setLodgingTotal]= useState(0)
    const [transportationTotal, setTransportationTotal]=useState(0)
    const [otherTotal, setOtherTotal] =useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)


    // console.log(tripName)
    // console.log( tripBudget)
    // console.log(tripLength)

    
  // console.log(trip)
  // NEED A CALULATE TOTAL COST FUNCTION USE FILTER METHOD FOR COST FROM EXPENSES then set that total to totalCost State 
  //can get data to post to db 50% of the time on 1st try 100% on second try if I click again without changing the data
  let newTrip = {
      name: tripName,
      budget: tripBudget,
      length: tripLength,
      cost:  totalCost,
      expenses: expenseList
    }
    console.log(newTrip)
    const getTripData = () => {
      
      //  console.log(trip) 
    }

  const postTrips = 'http://localhost:8000/trips'
  const handleTripSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios({
        method: 'post',
        url: postTrips,
        data: newTrip
      })
      .then(res => console.log(res))
    } catch (error) {
      
    }

  }


    return (
      <div className='create-container'>
        {/* <BodyNav /> */}
        <div className='create-form-container'>
      <Form>
        <FormGroup>
          <Label>
            <h3 className="create-new-trip-title">Create a new trip</h3>
            <p className="fill-in-form"> Fill in the form below to get started.</p>
          </Label>
          </FormGroup>
        <FormGroup>
          <Label>
            Trip Name
          </Label>
          <Input
          className="create-trip-input"
            onChange={(event) => { setTripName(event.target.value) }}
            id="tripname"
            name="trip"
            placeholder="Trip Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Desired Budget
          </Label>
          <Input
            onChange={(event) => { setTripBudget(event.target.value) }}
            id="budget"
            name="budget"
            placeholder="budget"
            type="text"
            className="create-trip-input"
          />
        </FormGroup>
        <FormGroup>
          <Label >
            Trip Length
          </Label>
          <Input
          className="create-trip-input"
            onChange={(event) => { setTripLength(event.target.value) }}
            id="exampleNumber"
            name="number"
            placeholder="Trip Length"
            type="number"
          />
        </FormGroup>
      
      </Form>
      <AddExpenseItem lodgingTotal={lodgingTotal} setLodgingTotal={setLodgingTotal} setOtherTotal={setOtherTotal} otherTotal={otherTotal} setFoodTotal={setFoodTotal} foodTotal={foodTotal} setTransportationTotal={setTransportationTotal} transportationTotal={transportationTotal} setExpenseTotal={setExpenseTotal} expenseTotal={expenseTotal} expenseList= {expenseList} setExpenseList={setExpenseList} totalCost={totalCost} setTotalCost={setTotalCost} expenseItem={expenseItem} setExpenseItem={setExpenseItem} itemCategory={itemCategory} setItemCategory={setItemCategory} itemCost={itemCost} setItemCost={setItemCost} itemTitle={itemTitle} setItemTitle={setItemTitle}/>

      <ExpenseList className="expense-list-component" lodgingTotal={lodgingTotal} setLodgingTotal={setLodgingTotal} setOtherTotal={setOtherTotal} otherTotal={otherTotal} setFoodTotal={setFoodTotal} foodTotal={foodTotal} setTransportationTotal={setTransportationTotal} transportationTotal={transportationTotal} setExpenseTotal={setExpenseTotal} expenseTotal={expenseTotal} expenseList= {expenseList} setExpenseList={setExpenseList} totalCost={totalCost} setTotalCost={setTotalCost}  expenseItem={expenseItem} setExpenseItem={setExpenseItem} itemCategory={itemCategory} setItemCategory={setItemCategory} itemCost={itemCost} setItemCost={setItemCost} itemTitle={itemTitle} setItemTitle={setItemTitle}/>
    
    <button className="submit-trip-button" onClick={handleTripSubmit}>Submit Trip</button>
    </div>
  </div>
    
    )
  }

  export default CreateTrip