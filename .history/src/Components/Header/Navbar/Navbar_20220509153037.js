import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul>
        <li>
          <Link to='/movies' className='nav-link'>➭Movies <span className='nav-icon'>🔽</span></Link>
          <div className='d'>

          </div>
        </li>
        <li>
          <Link to='/genres' className='nav-link'>Genres <span className='nav-icon'>🔽</span></Link>
        </li>
        <li>
          <Link to='/special-Categories' className='nav-link'>Special Categories <span className='nav-icon'>🔽</span></Link>
        </li>
        <li>
          <Link to='/join-telegram' className='nav-link'>Join Us On Telegram</Link>
        </li>
        <li>
          <Link to='/bsub-movies' className='nav-link'>Bsub Movies</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar