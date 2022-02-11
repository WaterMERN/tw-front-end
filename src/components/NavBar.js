import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  //HEADER ANDNAVBAR Combined
  return (
    <div className='header-container'>
      <div className='nav-container'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
