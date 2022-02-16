import React from 'react';
import { Link } from 'react-router-dom';

function BodyNav() {
    return (
        <div className='nav-home'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a id='border' className="nav-link active" aria-current="page" href="/createtrip">Create Trip</a>
                </li>
                <li className="nav-item">
                    <a id='border' className="nav-link active" aria-current="page" href="/mytrips">My Trips</a>
                </li>
            </ul>
        </div>
    )
}

export default BodyNav