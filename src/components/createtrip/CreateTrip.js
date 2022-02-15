import React, { useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from "axios"
import ExpenseList from './ExpenseList';
import AddExpenseItem from './AddExpenseItem';
import BodyNav from '../BodyNav';
import { Link } from 'react-router-dom';

function CreateTrip() {
  const [tripName, setTripName] =useState('')
  const [tripBudget, setTripBudget] =useState(0)
  const [tripLength, setTripLength] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [expenseList, setExpenseList] = useState([])
 
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
      expenses: expenseList,
      owner: localStorage.getItem('User')
      
    }
    console.log(newTrip)
    const getTripData = () => {
      
      //  console.log(trip) 
    }

  const authorizeURL = { Authorization:` Bearer ${localStorage.getItem('token')}`}
  console.log (authorizeURL)
  const postTrips = 'http://localhost:8000/trips'
  const handleTripSubmit = async (event) => {
    
    try {
      await axios({
        method: 'post',
        url: postTrips,
        data: newTrip,
        headers: authorizeURL
      })
      .then(res => console.log(res))
    } catch (error) {

    }
   

  }

  if (!localStorage.getItem('token')){
    return (
      <h1 className='login-message'> Please go to Home page and login to access Create Trip</h1>
    )
  }

  }

  return (
    <div className='create-container'>
      <BodyNav />
      <div className='create-form-container'>
       <Form className="create-trip-form">
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

      <AddExpenseItem expenseList= {expenseList} setExpenseList={setExpenseList} totalCost={totalCost} setTotalCost={setTotalCost}/>
      <ExpenseList className="expense-list-component"  ={expenseList} setExpenseList={setExpenseList}/>
      
        <Link to= '/mytrips'> <button onClick={handleTripSubmit}>Submit Trip</button></Link>
     
   </div>
    
</div>
  
  )
}

  export default CreateTrip