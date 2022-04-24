
import { useState } from 'react';
import Axios  from 'axios';
import './App.css';
import MovieList from './Components/MovieList/MovieList';

function App() {

  const [todos, setTodos] = useState ([''])
  
  

    


  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
