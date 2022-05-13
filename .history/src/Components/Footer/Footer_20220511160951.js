import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import axios from "axios";

const Footer = () => {

const data= () => {
  const options = {
    method: 'GET',
    url: 'https://tvjan-tvmaze-v1.p.rapidapi.com/people/null',
    headers: {
      'X-RapidAPI-Host': 'tvjan-tvmaze-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'NOT-AUTHORIZED'
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