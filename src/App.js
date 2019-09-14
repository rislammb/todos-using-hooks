import React, { useState } from 'react';
import './App.css';

const Todo = ({ index, todo, completeTodo, removeTodo }) => {
  return (
    <div className='todo-item'>
      <div style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
        {todo.text}
      </div>
      <div className='btn-group'>
        <button onClick={() => completeTodo(index)}>
          {todo.isComplete ? 'Undo Todo' : 'Complete'}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Add new todo...'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};
const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React with hooks',
      isComplete: false
    },
    {
      text: 'Lunch with friend',
      isComplete: true
    },
    {
      text: 'Go back home',
      isComplete: false
    }
  ]);
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <div className='todo-list'>
        <h2 className='todo-header'>Todo App Using Hooks</h2>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
