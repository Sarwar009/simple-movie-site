import React from 'react';
import LetestMovie from './LetestMovie/LetestMovie';
import './MovisList.css'
import TvSeries from './TvSeries/TvSeries';

const MovieList = () => {


  return (
    <div className='movie-listing-container'>

        <LetestMovie />
        <TvSeries />
    </div>
  )
}

export default MovieList;