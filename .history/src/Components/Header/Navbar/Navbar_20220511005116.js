import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul>
			<li className='li'><Link  to='/'>Home</Link></li>
			<li className='li'><Link  to='/letest-movies'>Letest Movies</Link></li>
			<li className='li'><Link  to='/bsub-movies'>BSub Movies</Link></li>
			<li className='li'><Link  to='/join-telegram'>Join Us On Telegram</Link></li>
			<li className='li'><Link  to='/contact'>Contact</Link></li>
		</ul>
    </>
  )
}

export default Navbar

