import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LetestAllMovie from './Components/MovieList/LetestMovie/LetestAllMoviesList';
import AllTvSeries from './Components/MovieList/TvSeries/AllTvSeries';


function App() {

  


  return (
    <div className="App container">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/letestMovies' element={<LetestAllMovie />} />
          <Route path='/tvseries' element={<AllTvSeries />} />
          {/* <Route path="/:id" children={ Child } /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
