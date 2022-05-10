import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul className='' id="menu">
			<li className='li'><Link  to='/'>Home</Link></li>
			<li className='li'><Link  to='/'>HTML</Link></li>
			<li className='li'><Link  to='/'>CSS</Link>
				
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
					<ul>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
						<li><Link  to='/'>Dropdown Item </Link></li>
					</ul>
			</li>
			<li className='li'><Link  to='/'>Home</Link></li>
			<li className='li'><Link  to='/'>HTML</Link></li>
		</ul>
    </>
  )
}

export default Navbar

