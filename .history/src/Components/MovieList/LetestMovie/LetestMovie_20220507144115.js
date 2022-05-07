import React from 'react'
import { letestMoviesData } from './Data'


const LetestMovie = () => {

    const LetestDataSlice = letestMoviesData.slice(0,10);

  return (
    <>
        <h3>Letest Movies</h3>
        {
            LetestDataSlice
        }
    </>
  )
}

export default LetestMovie