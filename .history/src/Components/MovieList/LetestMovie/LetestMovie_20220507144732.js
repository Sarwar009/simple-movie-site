import React from 'react'
import { letestMoviesData } from './Data'


const LetestMovie = () => {

    const LetestDataSlice = letestMoviesData.slice(0,10);

  return (
    <>
        <h3>Letest Movies</h3>
        <div className='letest-movies'>
            {
                LetestDataSlice.map (({img, title, released}, index) => {
                    return (
                        <div className='movies-container' key={index}>
                            <div className='movie.item'>
                                <img src={img} alt=''/>
                                <h4>{title}</h4>
                                <h6>{released}</h6>
                            </div>
                        </div>
                    )
                }) 
            }
        </div>
        <button>See More</button>
    </>
  )
}

export default LetestMovie