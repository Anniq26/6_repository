import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import { TodoProvider } from '../TodoContext';

const TasksPage = () => {
  return (
    <TodoProvider>
      <AddTodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default TasksPage;
