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
  //fn called when user submits the form -line 17
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    if (todoTitle === '') {
      return;
    }
    onAddTodo(todoTitle);
    setTodoTitle(''); // Clear the form by resetting the state
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
