import React, {useState, useEffect} from 'react';
import BodyNav from './BodyNav';
import { Route, Routes } from 'react-router-dom';
import CreateTrip from './createtrip/CreateTrip';
import MyTrips from './mytrips/MyTrips';
import About from './About';
import Home from './Home';
function Body() {
    const [authToken, setAuthToken] = useState()
    console.log(authToken)
    return (
        <div className='home-container'>
            
            <Routes>
                <Route path="/" element={<Home authToken={authToken} setAuthToken={setAuthToken}/>} />
                <Route path="/createtrip" element={<CreateTrip authToken={authToken} setAuthToken={setAuthToken}/>} />
                <Route path="/mytrips" element={<MyTrips authToken={authToken} setAuthToken={setAuthToken}/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
        // new trip
        // previous trips
    )
}

export default Body
