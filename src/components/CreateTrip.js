import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from "axios"
import ExpenseList from './ExpenseList';
import AddExpenseItem from './AddExpenseItem';

const fakeExpenses = [
  {category: "lodging",
  title: "hotel",
  cost: 80},
  {category: "Food",
    title: "McDonalds",
    cost: 90}
]

function CreateTrip() {
  const [tripName, setTripName] =useState('')
  const [tripBudget, setTripBudget] =useState(0)
  const [tripLength, setTripLength] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [expenseList, setExpenseList] = useState([fakeExpenses])

  console.log(tripName)
  console.log( tripBudget)
  console.log(tripLength)
  console.log(expenseList)

  const [trip, setTrip] = useState({
    name: {tripName},
    budget: {tripBudget},
    length: {tripLength},
    cost:  {totalCost},
    expenses: {expenseList}
    
})

const handleTripSubmit = (event) => {
  event.preventDefault()

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
      {/* <button onSubmit={handleTripSubmit}>Submit</button> */}
    </Form>
    <AddExpenseItem expenseList={expenseList} setExpenseList={setExpenseList} />
    <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList}/>
  </div>
</div>
  
  )
}

export default CreateTrip