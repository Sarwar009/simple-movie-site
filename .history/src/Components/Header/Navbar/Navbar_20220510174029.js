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
				<div>
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
				</div>		
				<div>
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
				</div>
				<div>
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
				</div>
			</li>
		</ul>
    </>
  )
}

export default Navbar

