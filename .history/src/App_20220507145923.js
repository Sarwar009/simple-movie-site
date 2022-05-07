import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LetestMovie from './Components/MovieList/LetestMovie/LetestMovie';


function App() {


  return (
    <div className="App">
      <Home />

      <BrowserRouter>
        <Routes>
          <Route path='/letestMovies' element={<LetestMovie />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
