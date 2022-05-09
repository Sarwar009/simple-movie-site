import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul>
        <Link to='/movies' className='nav-link'>Movies <span className='nav-icon'>🔽</span></Link>
        <Link to='/genres' className='nav-link'>Genres <span className='nav-icon'>🔽</span></Link>
        <Link to='/special-Categories' className='nav-link'>Special Categories <span className='nav-icon'>🔽</span></Link>
        <Link to='/join-telegram' className='nav-link'>Join Us On Telegram <span className='nav-icon'>🔽</span></Link>
        <Link to='/bsub-movies' className='nav-link'>Bsub Movies <span className='nav-icon'>🔽</span></Link>
      </ul>
    </div>
  )
}

export default Navbar