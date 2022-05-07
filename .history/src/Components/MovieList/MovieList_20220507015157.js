import React from 'react';
import { moviesData } from '../../Data/MoviesData';
import './MovisList.css'

const MovieList = () => {

    const sliceOne = moviesData.slice(0,5);

  return (
    <div>MovieList

        <div className='movie'





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