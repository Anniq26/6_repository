import React, { useState } from "react";
import TaskForm from "./components/TaskForm";


const API_KEY = 'YZj-nd9Tf1je3ZQGi1z6T1WErm0qmhdOXiY2s9epUimbHsDRSw'

function App() {
  const[taskList, setTaskList] = useState([])

  const onFormSubmit = (taskName) => {
    fetch ('/api/v1/task', { 
      method: "POST" ,
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{ "title": taskName, "completed": false }]) 
})
.then(res => {
    if (!res.ok) throw new Error("Failed to submit task");
    return res.json();
})
.then(data => setTaskList((prev) => [...prev, {
          taskName: data.items[0].taskName,
          id: data.items[0]._uuid
        }]))
        .catch(err => console.log(err)) 
          }
  return (
    <div className="App">
      <TaskForm onFormSubmit={onFormSubmit}/>

      {taskList.map((task) => <div key={task.id}>
        <h3>{task.taskName}</h3>
      </div>)}
    </div>
  );
}

export default App;
