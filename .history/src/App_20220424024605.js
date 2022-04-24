
import { useState } from 'react';
import Axios  from 'axios';
import './App.css';
import MovieList from './Components/MovieList/MovieList';

function App() {

  const [todos, setTodos] = useState ([''])
  
  

    // *********set up your api *********

    // const todosItem = () => {
    //   Axios.get('https://jsonplaceholder.typicode.com/todos/3')
    //   .then((res) => {
    //     console.log(res);
    //     setTodos(res.data)})
    // }


  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
