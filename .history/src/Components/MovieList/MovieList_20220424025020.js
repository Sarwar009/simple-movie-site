import React from 'react';
import { moviesData } from '../../Data/MoviesData';

const MovieList = () => {
  return (
    <div>MovieList
        {
            moviesData.map(()=>)
        }
    </div>
  )
}

export default MovieList    



// *********set up your api *********

    // const todosItem = () => {
    //   Axios.get('https://jsonplaceholder.typicode.com/todos/3')
    //   .then((res) => {
    //     console.log(res);
    //     setTodos(res.data)})
    // }