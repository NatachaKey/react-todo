import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('savedTodoList');
    return savedTodoList ? JSON.parse(savedTodoList) : []; //turn string we got with JSON.stringify back into an Array.
  });
  // Effect to save todoList to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  function removeTodo(id) {
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo}  />
    </>
  );
}

export default App;
