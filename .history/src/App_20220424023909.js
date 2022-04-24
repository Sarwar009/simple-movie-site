
import { useState } from 'react';
import  Axios  from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([''])
  
  
    const todosItem = () => {
      Axios.get('https://jsonplaceholder.typicode.com/todos/3')
      .then(res => setTodos(res))
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
