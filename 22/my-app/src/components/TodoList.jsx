import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../reducers/modeSlice';
import { fetchTodos } from '../thunks/todosThunk';

const TodoList = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const todos = useSelector((state) => state.todos.items);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={handleToggleMode}>Toggle Mode</button>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
