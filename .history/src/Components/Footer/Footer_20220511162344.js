import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import axios from "axios";

const Footer = () => {

  return (
    <div className='footer-container'>
      <div><Link to='/' className='btn'>Back to Top</Link></div>
      <div className='copy-right'  onClick={data}>&copy; all rights Reserve</div>
    </div>
  )
}

export default Footer