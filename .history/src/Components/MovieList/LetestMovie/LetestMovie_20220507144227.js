import React from 'react'
import { letestMoviesData } from './Data'


const LetestMovie = () => {

    const LetestDataSlice = letestMoviesData.slice(0,10);

  return (
    <>
        <h3>Letest Movies</h3>
        {
            LetestDataSlice.map (({img, title, released}, index) => {
                return (
                    <div className='letest-movies'>
            <div className='movies-container'>
                <div className='movie.item'>
                    <img src={IMG} alt='pc'/>
                    <h4>Pirates of the caribbean</h4>
                </div>
            </div>
        </div>
                )
            }) 
        }
    </>
  )
}

export default LetestMovie