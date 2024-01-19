import React, { useEffect, useRef } from 'react';

function InputWithLabel(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }); // no dependency list to run this effect every time the component mounts

  return (
    <>
      <label htmlFor="todoTitle">{props.children} </label>
      <input
        style={{ marginLeft: '10px', border: 'none', fontSize: '20px' }}
        type="text"
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef} // Attach the ref to the input element
      />
    </>
  );
}
export default InputWithLabel;

// <label htmlFor="todoTitle">{props.children}</label> -any child node(s) are used as the label text
