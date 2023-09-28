import React from 'react';
const todoList = [
  { id: 1, title: 'complete assignment' },
  { id: 2, title: 'study SQL' },
  { id: 3, title: 'watch Redux tutorial' },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
