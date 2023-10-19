import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id); //pass current item id as an argument
  };
  return (
    <div>
      <li>{todo.title}</li>
      <li>Completed at: {todo.completedAt}</li>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

export default TodoListItem;
