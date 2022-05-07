import React from 'react'
import IMG from '../../../img/piratesofthecaribbean1.jpg'

const LetestMovie = () => {
  return (
    <>
        <div className='movies-container'>
        <div className='movie.item'>
            <img src={IMG} alt='pc'/>
            <h4>Pirates of the caribbean</h4>
        </div>
        </div>
        <div className='letest-movies-container'>
            <div className='movie.item'>
                <img src={IMG} alt='pc'/>
                <h4>Pirates of the caribbean</h4>
            </div>
        </div>
        <div className='letest-movies-container'>
            <div className='movie.item'>
                <img src={IMG} alt='pc'/>
                <h4>Pirates of the caribbean</h4>
            </div>
        </div>
        <div className='letest-movies-container'>
            <div className='movie.item'>
                <img src={IMG} alt='pc'/>
                <h4>Pirates of the caribbean</h4>
            </div>
        </div>
    </>
  )
}

export default LetestMovie