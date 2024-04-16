//13_todos.js
import React from 'react';
import TodoList from './13_.js';

function FinalTodo() {
  const todos = ["Buy groceries", "Do laundry", "Clean the house"];
  
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default FinalTodo;
