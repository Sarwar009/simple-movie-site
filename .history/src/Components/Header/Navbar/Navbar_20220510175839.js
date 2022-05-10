import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul className='ul' id="menu">
			<li className='li'><Link  to='/'>Home</Link></li>
			<li className='li'><Link  to='/'>Letest Movies</Link></li>
			<li className='li'><Link  to='/'>BSub</Link></li>
			<li className='li'><Link  to='/'>Home</Link></li>
			<li className='li'><Link  to='/'>HTML</Link></li>
		</ul>
    </>
  )
}

export default Navbar

