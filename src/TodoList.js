import React from 'react';
import TodoListItem from './TodoListItem';
const todoList = [
  { id: 1, title: 'complete assignment' },
  { id: 2, title: 'study SQL' },
  { id: 3, title: 'watch Redux tutorial' },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem key={item.id} todo={item} />;
      })}
    </ul>
  );
}

export default TodoList;
