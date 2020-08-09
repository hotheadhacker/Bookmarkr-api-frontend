import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <span className='navbar-brand mb-0 h1 display-8'>
        Bookmarker&nbsp;
        <sup className='badge badge-success'>v0.1 based on fastAPI</sup>
      </span>
      <span></span>

      <Link to='/'>
        <span className='text-white'>
          <h3>Add |</h3>
        </span>
      </Link>
      <Link to='/view'>
        <span className='text-white'>
          <h3> View</h3>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
