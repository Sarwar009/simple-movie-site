import React from 'react'
import { Link } from 'react-router-dom';
import { letestMoviesData } from './Data'


const LetestMovie = () => {

    const LetestDataSlice = letestMoviesData.slice(0,8);

  return (
    <div className='letestMoviesWrapper'>
        <div className='see-more'>
            <h3><span className='span'> </span>Letest Movies</h3>
            <Link to='/letestMovies' className='btn see-more-btn'>See More</Link>
        </div>
        
        <div className='letest-movies'>
            {
                LetestDataSlice.map (({img, title, released}, index) => {
                    return (
                        <div className='movies-container' key={index}>
                            <div className='movie.item'>
                                <div className='movies-img'>
                                    <img src={img} alt=''/>
                                </div>
                                <div className=''
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