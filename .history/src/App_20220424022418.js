
import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([])
  
  
    const todosItem = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => setTodos(data.title))
    }

  return (
    <div className="App">
      hello
      <button onClick={todosItem}>get</button>
      {todos}
    </div>
  );
}

export default App;
