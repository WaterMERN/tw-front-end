import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  //HEADER ANDNAVBAR Combined
  return (
    <>
    <div className='header-container'>
      <h2 className="travel-watcher-headline">TRAVEL WATCHER:</h2>
      <h3 className="header-tagline">Track your travel expenses with ease...</h3>

      <div className='nav-container'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </div>
    </div>
    
     </>

  )
}

export default NavBar
{/* <Link to='/createtrip'><li>Create Trip</li></Link>
<Link to='/mytrips'><li>My Trips</li></Link> */}
