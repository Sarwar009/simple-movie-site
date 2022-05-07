import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LetestMovie from './Components/MovieList/LetestMovie/LetestMovie';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/letestMovies' element={<LetestAllMovie />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
