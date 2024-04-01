import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskItem from "./components/TaskItem"; 
import GlobalHeader, { GlobalStateProvider } from "./contexts/GlobalHeader";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <GlobalHeader />
        <Route path="/" exact component={Tasks} />
        <Route path="/edit/:taskId" component={TaskItem} />
      </Router>
    </GlobalStateProvider>

  );
}

export default App;
