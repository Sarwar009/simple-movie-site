import React from 'react'
import { Link } from 'react-router-dom';
import { letestMoviesData } from '../LetestMovie/Data'


const TvSeries = () => {

    const LetestDataSlice = letestMoviesData.slice(0,8);

  return (
    <div className='letestMoviesWrapper'>
        <div className='see-more'>
            <h3><spna className='span'> </spna>Tv Series</h3>
            <Link to='/tvseries' className='btn'>See More</Link>
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

export default TvSeries