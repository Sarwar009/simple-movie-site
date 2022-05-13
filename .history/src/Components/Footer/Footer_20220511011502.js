import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div><Link to={<Hea} className='btn'>Back to Top</Link></div>
      <div className='copy-right'>&copy; all rights Reserve</div>
    </div>
  )
}

export default Footer