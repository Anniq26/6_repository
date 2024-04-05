import React from 'react';
import { useTodo } from '../TodoContext';

const CompletedTodos = () => {
  const { state } = useTodo();
  const completedTodos = state.todos.filter(todo => todo.done);

  return (
    <ul>
      {completedTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default CompletedTodos;
