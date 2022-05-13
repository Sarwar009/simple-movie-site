import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div><Link to={<Header />} className='btn'>Back to Top</Link></div>
      <div className='copy-right'>&copy; all rights Reserve</div>
    </div>
  )
}

export default Footer