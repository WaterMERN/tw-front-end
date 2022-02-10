import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from "axios"
import ExpenseList from './ExpenseList';

export default function CreateTrip() {
  const [trip, setTrip] = useState({
    trip: '',
    budget: ''
})

const handleChange = (event) => {
    const { name, value } = event.target
    setTrip(prevTrip => {
        return {
            ...prevTrip,
            [name]: value
          }
        })
        console.log(value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(trip)
    const newTrip = {
        name: trip.name
    }
    setTrip = newTrip
    
    // axios.post('#', newTrip)
    console.log(newTrip)
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
          onChange={handleChange}
          id="tripname"
          name="trip"
          placeholder="trip name"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Budget
        </Label>
        <Input
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
          id="exampleNumber"
          name="number"
          placeholder="Trip Length"
          type="number"
        />
      </FormGroup>
    </Form>
    <ExpenseList />
  
  
    </div>
  
{/* MOVE TO TOTALS COMPONENT */}
    <div>
        <div className='create-totals-container'>
          <h5>Food ----------------  $0.00 </h5>
          <h5>Transportation -----  $0.00</h5>
          <h5>Lodging------------- $0.00</h5>
          <h3>Total -------- $0.00</h3>
          <button onSubmit={handleSubmit} className='btn btn-lg btn-info'>Save Trip</button>
        </div>
      </div>
    </div>
  )
}
