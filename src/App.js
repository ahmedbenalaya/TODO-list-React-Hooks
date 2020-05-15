import React,{ useState } from 'react';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])


  const handleNewTodoChange=(e)=>{
    e.preventDefault()
  setNewTodo(e.target.value)  
  }

  const handleNewTodo=(e)=>{
    e.preventDefault()
    if (newTodo ==='') return
    setTodos([...todos, {id: Date.now(), text:newTodo} ])
    
  
  }

  const removeTodo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  }


  return (
    <div className="App">
      <h1>Todos</h1>
      <form>
        <input placeholder='Ecrire ici...' onChange={handleNewTodoChange}  />
        <button onClick={handleNewTodo} className='bouton'>Ajouter</button>
        <ul className='todoList'>
          {todos.map((todo)=>(
            <li key={todo.id} className='todo'>
              {todo.text}
              <a href="#" onClick={()=> removeTodo(todo.id)}>X</a>
              </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
