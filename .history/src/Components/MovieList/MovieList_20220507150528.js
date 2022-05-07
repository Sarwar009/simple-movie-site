import React from 'react';
import LetestMovie from './LetestMovie/LetestMovie';
import './MovisList.css'

const MovieList = () => {

    // const sliceOne = moviesData.slice(0,5);

  return (
    <div className='movie-listing-container'>

        <LetestMovie />





        {/* {
            sliceOne.map((data, index)=> {
                return (
                    <div key={index}>
                        {data.title}
                        {data.url}
                    </div>
                )
            })
        } */}
    </div>
  )
}

export default MovieList;