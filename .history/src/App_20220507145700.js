import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';


function App() {


  return (
    <div className="App">
      <Home />

      <BrowserRouter>
        <Routes>
          <Route path=''>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
