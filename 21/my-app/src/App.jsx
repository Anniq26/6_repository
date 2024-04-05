import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Route path="/" exact component={TasksPage} />
        <Route path="/completed" component={CompletedTodosPage} />
      </Router>
    </TodoProvider>
  );
}

const TasksPage = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

const CompletedTodosPage = () => {
  return (
    <div>
      <CompletedTodos />
    </div>
  );
};

export default App;
