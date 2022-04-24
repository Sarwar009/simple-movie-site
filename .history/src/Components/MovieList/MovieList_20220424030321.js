import React from 'react';
import { moviesData } from '../../Data/MoviesData';
import ''

const MovieList = () => {
  return (
    <div>MovieList
        {
            moviesData.map((data, index)=> {
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