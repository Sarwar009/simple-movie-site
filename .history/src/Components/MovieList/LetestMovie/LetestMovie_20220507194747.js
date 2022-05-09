import React from 'react'
import { Link } from 'react-router-dom';
import { letestMoviesData } from './Data'


const LetestMovie = () => {

    const LetestDataSlice = letestMoviesData.slice(0,10);

  return (
    <div className='letestMoviesWrapper'>
        <div> <div className='see-more'>
            <h3>Letest Movies</h3>
            <Link to='/letestMovies' className='btn'>See More</Link>
        </div>
        </div>
        
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
        
    </div>
  )
}

export default LetestMovie