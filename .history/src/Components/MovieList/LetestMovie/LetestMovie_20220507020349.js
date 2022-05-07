import React from 'react'
import IMG from '../../../img/piratesofthecaribbean1.jpg'

const LetestMovie = () => {
  return (
    <div className='letest-movies-container'>
        <div className='movie.item'>
            <img src={IMG} alt=''/>
            <h4>Pirates of the caribbean</h4>
        </div>
    </div>
  )
}

export default LetestMovie