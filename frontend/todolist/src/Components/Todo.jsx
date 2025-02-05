import React, { useState } from 'react';
import "./Todolist.css"

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, newTask]);
      setNewTask('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="main-container">
        <h1>To Do List</h1>
        {/* Card for the input section */}
        <div className="card">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your Tasks.."
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <button className="btn" type="submit" onClick={addTodo}>
              Add 
            </button>
          </div>
        </div>
        
        {/* List of tasks outside the card */}
        <ul className='list'>
  {todos.map((todo, index) => (
    <li key={index}>
      <span>{todo}</span>
      <button className='btn-dlt' onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  ))}
</ul>
      </div>
    </>
  );
};

export default Todo;
