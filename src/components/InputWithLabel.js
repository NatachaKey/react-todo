import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InputWithLabel(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle" style={{  fontSize: '20px' }}>{props.children} </label>
      <input
        style={{ marginLeft: '10px', border: 'none', fontSize: '25px' }}
        type="text"
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
      />
    </>
  );
}

InputWithLabel.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
