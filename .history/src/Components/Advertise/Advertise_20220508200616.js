import React from 'react'
import { advertiseData } from './AdvertiseData'

import "./Advertise.css"

const Advertise = () => {
  return (
    
    <div className='advertise-container'>
        <h3 className='main-title'>Advertise With us</h3>
        <div>
            <h4 className='child-title'>Letest Updates</h4>

            {
        advertiseData.map(({img, title, relesead}, index) => {
            return (
                <div className='advertise-items'>
                <div className='advertise-img'>
                    <img src={img} alt='alt' />
                </div>
                <div className='advertise-content'>
                    <h6 className='movie-title'>{title}</h6>
                    <h6 className='relesead-date'>{relesead}</h6>
                    <p className='rating'>★8.5</p>
                </div>
            </div>
            )
        })
    }

            {/* <div className='advertise-items'>
                <div className='advertise-img'>
                    <img src={IMG} alt='alt' />
                </div>
                <div className='advertise-content'>
                    <h6 className='movie-title'>Pirates OF The Caribbean</h6>
                    <h6 className='relesead-date'>2020</h6>
                    <p className='rating'>★8.5</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Advertise