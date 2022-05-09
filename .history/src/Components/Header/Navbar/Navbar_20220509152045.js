import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul>
        <Link to='/movies' className='nav-link'>Movies <span</Link>
        <Link to='/genres' className='nav-link'>Genres</Link>
        <Link to='/special-Categories' className='nav-link'>Special Categories</Link>
        <Link to='/join-telegram' className='nav-link'>Join Us On Telegram</Link>
        <Link to='/bsub-movies' className='nav-link'>Bsub Movies</Link>
      </ul>
    </div>
  )
}

export default Navbar