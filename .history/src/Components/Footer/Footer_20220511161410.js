import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import axios from "axios";

const Footer = () => {

const data= () => {
  const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/genres',
    headers: {
      'X-RapidAPI-Host': 'unogsng.p.rapidapi.com',
      'X-RapidAPI-Key': '073eae167cmsh8e9c1d50a41138bp19e503jsna1fe07584e79'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
  return (
    <div className='footer-container'>
      <div><Link to='/' className='btn'>Back to Top</Link></div>
      <div className='copy-right'>&copy; all rights Reserve</div>
    </div>
  )
}

export default Footer