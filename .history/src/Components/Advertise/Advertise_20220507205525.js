import React from 'react'
import IMG from '../../img/piratesofthecaribbean3.jpg'
import 

import "./Advertise.css"

const Advertise = () => {
  return (
    <div className='advertise-container'>
        <h3 className='main-title'>Advertise With us</h3>
        <div>
            <h4 className='child-title'>Letest Updates</h4>
            <div className='advertise-items'>
                <div className='advertise-img'>
                    <img src={IMG} alt='alt' />
                </div>
                <div className='advertise-content'>
                    <h6 className='movie-title'>Pirates OF The Caribbean</h6>
                    <h6 className='realesed-date'>2020</h6>
                    <p className='rating'>★8.5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertise