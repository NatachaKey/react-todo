import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo, onUpdateTodo  }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
  const handleUpdateClick = () => {
    const newTitle = prompt("Change the task name:", todo.title);
    if (newTitle !== null) {
      onUpdateTodo(todo.id, newTitle);
    }
  };

  // Convert ISO-formatted date to a Date object
  const createdTime = new Date(todo.createdTime);

  // Format the date as desired (example: "January 30, 2024, 13:23:21")
  const formattedCreatedTime = createdTime.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });


  return (
    <div>
      <li className={style.listItem}>{todo.title}</li>
      <li>Created time: {formattedCreatedTime}</li>
      <button className={style.btnupdate} onClick={handleUpdateClick}>
        Update
      </button>
      <button className={style.btn} onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  // shape - expected object structure
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdTime: PropTypes.string,
  }),
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
