import React from 'react';
import { useState } from 'react';

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
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle(''); // Clear the form by resetting the state
  };

  return (
    <div>
      <form action="" onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
