import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo'
const NavBar=()=>{
  return (
    <div className='navbar-container'>
        <Logo/>
        <div className='navbar-links-container'>
            <Link to='/cards'>Cards</Link>
            <div></div>
            <Link to='/home'>Home</Link>
        </div>
        
    </div>
  );
}

export default NavBar