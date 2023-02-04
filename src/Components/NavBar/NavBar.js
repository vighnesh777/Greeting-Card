import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
  return (
    <div className='navbar-container'>
        <Link to='/cards'>Cards</Link>
        <Link to='/'>Home</Link>
    </div>
  );
}

export default NavBar