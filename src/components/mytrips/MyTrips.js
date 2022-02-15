  import React, {useState, useEffect} from 'react';
  import MyTripCard from './MyTripCard';
  import { Container, Row } from 'reactstrap'
  import BodyNav from '../BodyNav';

  function MyTrips( ) {
    // need a map after pulling entire trip collection from the database 
    const [ allTrips, setAllTrips] = useState(null)
  
    const authorizeURL = { 'Accept': 'application/json', 
    'Authorization' :` Bearer ${localStorage.getItem('token')}`}
  console.log (authorizeURL)
    const getTrips = 'http://localhost:8000/trips'
    const fetchTrips = () => {
        fetch(getTrips, 
          { headers: authorizeURL})
          .then(response => response.json())
          .then(json => setAllTrips(json.filter((trip) => {
            if (trip.owner === localStorage.getItem('User')) return trip
          })))
            
          .catch(console.error)
    }
    useEffect(() =>{
    fetchTrips()
    }, [])
    
    if(allTrips === null) return <h1 className='login-message'> LOADING TRIPS... if message persists please go to Home page and login to access My Trips</h1>
    console.log(allTrips)
      
    
    return (
      <Container className='trip-row'>
          <BodyNav />
          <Row xs="1" m="2" l="2" xl="2" s="2"  >
          {allTrips.map(trip =>{
            return(
              <MyTripCard tripId={trip._id} budget={trip.budget} expenses={trip.expenses} name={trip.name} length={trip.length} cost={trip.cost} />
            )
          })}
            </Row>
      </Container>
    )
  }

  export default MyTrips