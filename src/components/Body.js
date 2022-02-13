import React, {useState, useEffect} from 'react';
import BodyNav from './BodyNav';
import { Route, Routes } from 'react-router-dom';
import CreateTrip from './createtrip/CreateTrip';
import MyTrips from './mytrips/MyTrips';
import About from './About';
import Home from './Home';

function Body() {
 
    return (
        <div className='home-container'>
            <BodyNav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createtrip" element={<CreateTrip />} />
                <Route path="/mytrips" element={<MyTrips />} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
        // new trip
        // previous trips
    )
}

export default Body
