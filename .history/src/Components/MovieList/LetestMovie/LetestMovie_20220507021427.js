import React from 'react'
import IMG from '../../../img/piratesofthecaribbean1.jpg'

const LetestMovie = () => {
  return (
    <>
        <h3></h3>
        <div className='letest-movies'>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc' className='movies-img' />
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default LetestMovie