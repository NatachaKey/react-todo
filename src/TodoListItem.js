import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id); //pass current item id as an argument
  };
  return (
    <div>
      <li>{todo.title}</li>
      <li>Created time: {todo.createdTime}</li>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

export default TodoListItem;
