import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container container'>
      <div><Link to='/'>Back to Top</Link></div>
      <div>&copy; Reserve by author</div>
    </div>
  )
}

export default Footer