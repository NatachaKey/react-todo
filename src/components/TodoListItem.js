import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <div>
      <li className={style.listItem}>{todo.title}</li>
      <li>Created time: {todo.createdTime}</li>
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
    createdTime: ProtoTypes.string,
  }),
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
