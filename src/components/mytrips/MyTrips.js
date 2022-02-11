import React, {useState, useEffect} from 'react';
import MyTripCard from './MyTripCard';
import { Container, Row } from 'reactstrap'

function MyTrips() {
  // need a map after pulling entire trip collection from the database 
  const [ allTrips, setAllTrips] = useState(null)

  const getTrips = 'http://localhost:8000/trips'
  const fetchTrips = () => {
      fetch(getTrips)
        .then(response => response.json())
        .then(json => setAllTrips(json))
        .catch(console.error)
  }
  useEffect(() =>{
  fetchTrips()
  }, [])

  if(allTrips === null) return <p>loading</p>
  // console.log(allTrips)
  
  return (
    <Container className='trip-row'>
      {allTrips.map(trip =>{
        return(
          <Row xl="2" xs="1" >
          <MyTripCard tripId={trip.id} budget={trip.budget} expenses={trip.expenses} name={trip.name} length={trip.length} cost={trip.cost}/>
        </Row>

        )
      })}
        
    </Container>
  )
}

export default MyTrips