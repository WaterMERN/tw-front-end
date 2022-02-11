import React, { useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from "axios"
import ExpenseList from './ExpenseList';
import AddExpenseItem from './AddExpenseItem';

function CreateTrip() {
  const [tripName, setTripName] =useState('')
  const [tripBudget, setTripBudget] =useState(0)
  const [tripLength, setTripLength] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [expenseList, setExpenseList] = useState([])
  console.log(tripName)
  console.log( tripBudget)
  console.log(tripLength)

  const [trip, setTrip] = useState()
// console.log(trip)

let newTrip = {
    name: tripName,
    budget: tripBudget,
    length: tripLength,
    cost:  totalCost,
    expenses: expenseList
  }
const handleTripSubmit = (event) => {
  event.preventDefault()
  // axios.post(postURL, trip)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  setTrip(newTrip)
  console.log(trip)

}


  return (
    <div className='create-container'>
      <div className='create-form-container'>
    <Form>
      <FormGroup>
        <Label>
          <h2>Create a new trip</h2>
        </Label>
        </FormGroup>
      <FormGroup>
        <Label>
          Trip Name
        </Label>
        <Input
          onChange={(event) => { setTripName(event.target.value) }}
          id="tripname"
          name="trip"
          placeholder="trip name"
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
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Trip Length
        </Label>
        <Input
          onChange={(event) => { setTripLength(event.target.value) }}
          id="exampleNumber"
          name="number"
          placeholder="Trip Length"
          type="number"
        />
      </FormGroup>
     
    </Form>
    <AddExpenseItem expenseList= {expenseList} setExpenseList={setExpenseList} />
    <ExpenseList expenseList ={expenseList} setExpenseList={setExpenseList}/>
   <button onClick={handleTripSubmit}>Submit Trip</button>
   </div>
</div>
  
  )
}

export default CreateTrip