import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <Link to='/movies'>Movies</Link>
      </ul>
    </div>
  )
}

export default Navbar