import React from 'react'
import { Link } from 'react-router-dom';
import { letestMoviesData } from '../LetestMovie/Data'


const AllTvSeries = () => {


  return (
    <div className='letestMoviesWrapper'>
        <h3>Tv Series</h3>
        <div className='letest-movies'>
            {
                letestMoviesData.map (({img, title, released}, index) => {
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
        <div className='see-more'>
            <Link to='/' className='btn'>Back</Link>
        </div>
    </div>
  )
}

export default AllTvSeries