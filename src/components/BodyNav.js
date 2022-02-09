import React from 'react';
import { Link } from 'react-router-dom';


function BodyNav() {
    return (
        <div className='nav-home'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to={'/createtrip'} value="createtrip"><a className="nav-link active" aria-current="page" href="/createtrip">Create Trip</a></Link>
                </li>
                <li class="nav-item">
                    <Link to={'/mytrips'} value="mytrips"><a className="nav-link active" aria-current="page" href="/mytrips">My Trips</a></Link>
                </li>

            </ul>
        </div>
    )
}

export default BodyNav