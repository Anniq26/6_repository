import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './reducers/modeSlice';
import todosReducer from './reducers/todosSlice';

const store = configureStore({
  reducer: {
    mode: modeReducer,
    todos: todosReducer,
  },
});

export default store;
