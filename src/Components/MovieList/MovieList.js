import React from 'react';
import { moviesData } from '../../Data/MoviesData';
import './MovisList.css'

const MovieList = () => {

    const sliceOne = moviesData.slice(0,8);

  return (
    <div>MovieList
        {
            sliceOne.map((data, index)=> {
                return (
                    <div key={index}>
                        {data.title}
                        {data.url}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MovieList;