import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LetestAllMovie from './Components/MovieList/LetestMovie/LetestAllMoviesList';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/letestMovies' element={<LetestAllMovie />} />
          <Route path='/tvseries' element={<TvSeries}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
