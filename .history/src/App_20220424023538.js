
import { useState } from 'react';
import { Axios } from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([''])
  
  
    const todosItem = () => {
      As('https://jsonplaceholder.typicode.com/todos/3')
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
