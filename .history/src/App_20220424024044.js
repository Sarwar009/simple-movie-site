
import { useState } from 'react';
import Axios  from 'axios';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([''])
  
  

    // *********set up 
    // const todosItem = () => {
    //   Axios.get('https://jsonplaceholder.typicode.com/todos/3')
    //   .then((res) => {
    //     console.log(res);
    //     setTodos(res.data)})
    // }

  return (
    <div className="App">
      hello
      <button onClick={todosItem}>get</button>
      {todos.title}
    </div>
  );
}

export default App;
