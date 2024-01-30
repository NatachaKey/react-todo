import React from 'react';
import { useState, useEffect } from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import PropTypes from 'prop-types';

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view`;

function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define an async fetchData function
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.records);

      const todos = data.records.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.title,
          createdTime: new Date().toISOString(),
        };
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false); // Set isLoading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function in the useEffect
  }, []);

  //useEffect for Saving to localStorage: watches for changes in isLoading and todoList, When isLoading is false, it saves the current todoList to localStorage.
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  const addTodo = async (title) => {
    const postTitle = {
      fields: {
        title: title,
      },
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(postTitle),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error has occurred: ${response.status}`);
      }
      const todo = await response.json();
      const newTodo = {
        id: todo.id,
        title: todo.fields.title,
      };
      setTodoList([...todoList, newTodo]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(`${url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error has occurred: ${response.status}`);
      }
      const newTodoList = todoList.filter(function (todo) {
        return id !== todo.id;
      });
      setTodoList(newTodoList);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateTodo = async (id, newTitle) => {
    const updatedTodo = {
      fields: {
        title: newTitle,
      },
    };
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(updatedTodo),
    };
    try {
      const response = await fetch(`${url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error has occurred: ${response.status}`);
      }
      const updatedTodoData = await response.json();
      const updatedTodo = {
        id: updatedTodoData.id,
        title: updatedTodoData.fields.title,
      };
      const updatedTodoList = todoList.map((todo) => {
        if (todo.id === id) {
          return updatedTodo;
        } else {
          return todo;
        }
      });
      setTodoList(updatedTodoList);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <div>
          <h1 style={{ textAlign: 'center' }}>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            <TodoList
              todoList={todoList}
              onRemoveTodo={removeTodo}
              onUpdateTodo={updateTodo}
            />
          )}
        </div>
      </div>
    </>
  );
}

TodoContainer.propTypes = {
  todoList: PropTypes.array,
  isLoading: PropTypes.bool, // boolean
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};
export default TodoContainer;