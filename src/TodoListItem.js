import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <div>
      <li className = {style.listItem}>{todo.title}</li>
      <li>Created time: {todo.createdTime}</li>
      <button className= {style.btn} onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

export default TodoListItem;
