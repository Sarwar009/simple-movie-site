import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul id="menu">
			<li><Link  to='/'>Home</Link></li>
			<li><Link  to='/'>HTML</Link></li>
			<li><Link  to='/'>CSS</Link>
				<ul>
					<li><a href="#">Dropdown Item </a></li>
					<li><a href="#">Dropdown Item </a></li>
					<li><a href="#">Dropdown Item </a></li>
					<li><a href="#">Dropdown Item </a></li>
					<li><a href="#">Dropdown Item </a></li>
				</ul>			
			</li>
		</ul>
    </>
  )
}

export default Navbar

