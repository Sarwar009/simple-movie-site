import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbar

{/* <ul className='nav-ul'>
        <li className='nav-li'>
          <Link to='/movies' className='nav-link'>Movies <span className='nav-icon'>🔽</span></Link>
          <div className='dropdown-menu'>
            <ul>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
            </ul>
            <ul>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
            </ul>
            <ul>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
              <li><Link to='/' className='nav-link'><span className='nav-icon'>➭</span> Movies</Link></li>
            </ul>
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
      </ul> */}