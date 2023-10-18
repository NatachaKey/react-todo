import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: todoList } }); //resolve is a callback function for when the Promise is successful
      }, 2000);
    });
    
    fetchTodoList
    .then((result) => {
      setTodoList(result.data.todoList); // Update todoList with the data from the Promise
    })
    .catch((error) => {
      console.error('Error fetching todoList:', error);
    });
}, []); // Empty dependency list, so this runs once on component mount

  // Effect to save todoList to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  function removeTodo(id) {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
