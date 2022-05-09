import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to={/movies}>Movies</Link></li>
      </ul>
    </div>
  )
}

export default Navbar