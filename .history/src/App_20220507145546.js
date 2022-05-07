import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';


function App() {


  return (
    <div className="App">
      <Home />

      <BrowserRouter>
        <Routes
      </BrowserRouter>
    </div>
  );
}

export default App;
