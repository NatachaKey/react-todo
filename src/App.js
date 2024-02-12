import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import HomePage from './components/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/mytodo" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//test