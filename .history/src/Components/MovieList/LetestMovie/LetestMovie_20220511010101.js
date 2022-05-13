import React from 'react'
import { Link } from 'react-router-dom';
import { handleClick } from '../Common/Common';
import ItemDetails from '../ItemDetails/ItemDetails';
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
                            <div className='movie-item'  onClick={()=> handleClick()}>
                                <div className='movies-img'>
                                    <img src={img} alt=''/>
                                </div>
                                <div className='movies-name-release'>
                                    <h4>{title}</h4>
                                    <h6>{released}</h6>
                                </div>
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