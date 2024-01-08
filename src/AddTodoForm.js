import React from 'react';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    event.preventDefault();
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle === '') {
      return;
    }
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <div>
      <form action="" onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
