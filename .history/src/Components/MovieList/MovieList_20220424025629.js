import React from 'react';
import { moviesData } from '../../Data/MoviesData';

const MovieList = () => {
  return (
    <div>MovieList
        {
            moviesData.map((data, index)=> {
                return (
                    <div key={index}>
                        {data.title}
                        {data.}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MovieList;