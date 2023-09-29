import React from 'react';
import { useState } from 'react';

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState('');

  //fn called when user submits the form -line 17
  const handleAddTodo = (event) => {
    event.preventDefault();

    let todoTitle = event.target.title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
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
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
