import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskItem from "./components/TaskItem"; 

function App() {
  return (
    <Router>
      <Route path="/" exact component={Tasks} />
      <Route path="/edit/:taskId" component={TaskItem} />
    </Router>
  );
}

export default App;
