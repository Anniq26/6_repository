import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTodos, setLoading, setError } from '../reducers/todosSlice';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('api/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      dispatch(setTodos(data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);
