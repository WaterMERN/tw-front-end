import React from 'react';
import MyTripCard from './MyTripCard';
import { Row } from 'reactstrap'

function MyTrips() {
  // need a map after pulling entire trip collection from the database 
  return (
    <div>
  
        <Row xl="2" xs="1">
          <MyTripCard/>
        </Row>

    </div>
  )
}

export default MyTrips