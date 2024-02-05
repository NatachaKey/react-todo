import React from 'react';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

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
        <div>
          <InputWithLabel
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
          >
            Title
          </InputWithLabel>
          <button
            style={{
              backgroundColor: '#052935',
              marginLeft: '5px',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '5px 16px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;
