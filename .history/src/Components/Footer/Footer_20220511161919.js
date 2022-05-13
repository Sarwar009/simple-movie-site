import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import axios from "axios";

const Footer = () => {

const data= () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '073eae167cmsh8e9c1d50a41138bp19e503jsna1fe07584e79'
    }
  };
  
  fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
  return (
    <div className='footer-container'>
      <div><Link to='/' className='btn'>Back to Top</Link></div>
      <div className='copy-right'  onClick={data}>&copy; all rights Reserve</div>
    </div>
  )
}

export default Footer