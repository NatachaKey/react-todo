import React from 'react';

function App() {
  const todoList = [
    { id: 1, title: 'complete assignment' },
    { id: 2, title: 'study SQL' },
    { id: 3, title: 'watch Redux tutorial' },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
