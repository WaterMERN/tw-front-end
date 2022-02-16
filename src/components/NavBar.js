import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='header-container'>
      <div className="tagline-container">
      <h2 className="travel-watcher-headline">TRAVEL WATCHER:</h2>
      <h3 className="header-tagline">Track your travel expenses with ease...</h3>
      </div>
      <div className="nav-container">
        <ul>
          <li><Link className="link1" to="/">
            Home
          </Link></li>
         <li> <Link className="link1" to="/about"> 
            About
          </Link> </li>
         <li> <Link className="link1" to="/createtrip">
            Create Trip
          </Link> </li>
         <li> <Link className="link1" to="/mytrips">
            My Trips
          </Link> </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
