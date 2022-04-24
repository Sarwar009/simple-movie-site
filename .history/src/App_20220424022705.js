
import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([])
  
  
    const todosItem = () => {
      fetch('http://www.omdbapi.com/&apikey=b03fc200')
    .then(response => response.json())
    .then(data => setTodos(data))
    }

  return (
    <div className="App">
      hello
      <button onClick={todosItem}>get</button>
      {todos.title}
    </div>
  );
}

export default App;
