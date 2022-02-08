import React from 'react';
import BodyNav from './BodyNav';
import { Route, Routes } from 'react-router-dom';
import CreateTrip from './CreateTrip';
import MyTrips from './MyTrips';

function Body() {
    return (
        <div className='home-container'>
            <BodyNav />
            <Routes>
                <Route path="/createtrip" element={<CreateTrip />} />
                <Route path="/mytrips" element={<MyTrips />} />
            </Routes>
        </div>
        // new trip
        // previous trips
    )
}

export default Body
