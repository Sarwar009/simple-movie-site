import React from 'react'
import IMG from '../../img/piratesofthecaribbean3.jpg'

import "./Advertise.css"

const Advertise = () => {
  return (
    <div className='advertise-container'>
        <h3>Advertise With us</h3>
        <div>
            <h4>Letest Updates</h4>
            <div className='advertise-'>
                <div className='advertise-img'>
                    <img src={IMG} alt='alt' />
                </div>
                <div>
                    <h6>Pirates OF The Caribbean</h6>
                    <h6>2020</h6>
                    <p>★8.5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertise