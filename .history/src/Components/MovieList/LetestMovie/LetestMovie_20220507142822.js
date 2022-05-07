import React from 'react'
import IMGTH from '../../../img/piratesofthecaribbean3.jpg'
import IMGT from '../../../img/piratesofthecaribbean2.jpg'
import IMG from '../../../img/piratesofthecaribbean1.jpg'
import SangChi

const LetestMovie = () => {
  return (
    <>
        <h3>Letest Movies</h3>
        <div className='letest-movies'>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMGTH} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMGT} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMGTH} alt='pc' className='movies-img' />
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
                    <img src={IMGT} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMGTH} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default LetestMovie