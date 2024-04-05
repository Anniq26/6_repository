import React from 'react';
import { useTodo } from '../TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodo();

  return (
    <ul>
      {state.todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } })}>Done</button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
