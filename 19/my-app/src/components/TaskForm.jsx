import React from "react";
import { useState } from "react"

const TaskForm = ({onFormSubmit}) => {

    const [taskName, setTaskname] = useState()
    const [isCompleted, setIsCompleted] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(taskName, isCompleted)
    };

    return <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="TaskName" 
        value={taskName}
        onChange={e => setTaskname(e.target.value)}
        />
        
        <button>Submit</button>
        <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
    </form>
}

export default TaskForm