import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Link className='nav-item' to="/">Home</Link>
        <Link className='nav-item' to="/about">About</Link>
        <Link className='nav-item' to="/projects">Projects</Link>
        <Link className='nav-item' to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;