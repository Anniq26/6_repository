import React, { useState } from "react";
import TaskForm from "./components/TaskForm";


const API_KEY = 'YZj-nd9Tf1je3ZQGi1z6T1WErm0qmhdOXiY2s9epUimbHsDRSw'

function App() {
  const[taskList, setTaskList] = useState([])
  const getTasks = () => {
    fetch('/api/v1/tasks',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then(res => { 
    if (!res.ok) throw new Error("Respomse failed");
    return res.json()
  })
  .then(data => setTaskList((prev) => [...prev, {
    taskName: data.items[0].taskName,
    id: data.items[0]._uuid
  }]))
  .catch(err => console.log(err))
  }
  const addTask = (taskName, isCompleted) => {
        fetch('/api/v1/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify([{ name: taskName, isCompleted }])
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to add task");
            return res.json();
        })
        .then(data => {
            setTaskList(prevList => [...prevList, data.items[0]]);
        })
        .catch(err => console.error(err));
    };

  const onFormSubmit = (taskName) => {
    fetch ('/api/v1/tasks', { 
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{taskName}])
})
.then(res => {
    if (!res.ok) throw new Error("Respomse failed");
    return res.json()
})
.then(data => setTaskList((prev) => [...prev, {
          taskName: data.items[0].taskName,
          id: data.items[0]._uuid
        }]))
        .catch(err => console.log(err))
        const addTask = (taskName, isCompleted) => {
          fetch('/api/v1/tasks', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${API_KEY}`
              },
              body: JSON.stringify([{ name: taskName, isCompleted }])
          })
          .then(res => {
              if (!res.ok) throw new Error("Failed to add task");
              return res.json();
          })
          .then(data => {
              setTaskList(prevList => [...prevList, data.items[0]]);
          })
          .catch(err => console.error(err));
      }; 
          }
          
  return (
    <div className="App">
      <TaskForm onFormSubmit={onFormSubmit}/>

      {taskList.map((task) =>( <div key={task.id}>
        <h3>{task.taskName}</h3>
        <button onClick={getTasks}>get tasks</button>
      </div>))}
      {taskList.map(task => (
                    <li key={task._uuid}>
                        {task.name} - Completed: {task.isCompleted ? "Yes" : "No"}
                    </li>
                ))}
    </div>
  );
}

export default App;
