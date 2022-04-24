
import { useState } from 'react';
import Axi
import './App.css';

function App() {

  const [todos, setTodos] = useState ([''])
  
  
    const todosItem = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/3')
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
