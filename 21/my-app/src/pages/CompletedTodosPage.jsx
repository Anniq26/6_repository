import React from 'react';
import CompletedTodos from '../components/CompletedTodos';
import { TodoProvider } from '../TodoContext';

const CompletedTodosPage = () => {
  return (
    <TodoProvider>
      <CompletedTodos />
    </TodoProvider>
  );
};

export default CompletedTodosPage;
