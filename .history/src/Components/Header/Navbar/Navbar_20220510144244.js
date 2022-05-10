import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul id="menu">
			<li><L>Home</L></li>
			<li><a href="#">HTML</a></li>
			<li><a href="#">CSS</a>
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

