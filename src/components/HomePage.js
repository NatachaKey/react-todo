import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTodoPage = () => {
    navigate('/mytodo');
  };

  return (
    <div>
      <h1>Welcome to My Todo List App!</h1>
      <p>Click the button below to go to your Todo List:</p>
      <button onClick={navigateToTodoPage}>Go to My Todo List</button>
    </div>
  );
};

export default HomePage;
