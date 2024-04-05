import React, { useState } from 'react';
import { useTodo } from '../TodoContext';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { id: Math.random().toString(36).substr(2, 9), text, done: false } });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
