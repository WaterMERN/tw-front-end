import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function CreateTrip() {
  return (
    <div className='create-container'>

      <div className='create-form-container'>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">
          <h2>Create a new trip</h2>
        </Label>
       </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
          Trip Name
        </Label>
        <Input
          id="tripname"
          name="trip"
          placeholder="trip name"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
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
        <Label for="exampleNumber">
          Number
        </Label>
        <Input
          id="exampleNumber"
          name="number"
          placeholder="number placeholder"
          type="number"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleRange">
          Range
        </Label>
        <Input
          id="exampleRange"
          name="range"
          type="range"
        />
      </FormGroup>
    </Form>
    </div>
    <div>
        <div className='create-totals-container'>
          <h4>Food</h4>
          <h4>Transportation</h4>
          <h4>Lodging</h4>
        </div>
      </div>
    </div>
  )
}
