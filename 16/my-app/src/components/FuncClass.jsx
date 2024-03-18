import { useCallback, useState } from "react";
import React from "react";

const TodoItem = React.memo(({task, onDelete, onDone, id}) => {
    console.log('re-render')
    return(
        <li>
            {task}
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onDone(task)}>Done</button>
        </li>
    )
});
const DoneTask = React.memo (({task, onDelete, onReset, id}) => {
    console.log('re-rendered done')
    return (
        <li>
            {task}
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onReset(id)}>Reset</button>
        </li>
    )
})

const FuncTodo = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");
    const [doneTasks, setDoneTasks] = useState([]); 
    
    const handleChange = useCallback((event) => {
        setCurrentTask(event.target.value)
    }, [])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        console.log('submit')
        const task = [...tasks, currentTask]
        setTasks(task);
            setCurrentTask("");
    }, [currentTask, tasks])

    const handleDelete = useCallback((id) => {
        console.log('delete')
        const updatedTasks = tasks.filter((_, index) => index != id)
        setTasks(updatedTasks)
    }, [tasks])

    const handleDone = useCallback((task) => {
        console.log('done')
        setTasks((tasks) => tasks.filter((t) =>  t != task))
        setDoneTasks((dones) => [...dones, task])
    }, [])

    const handleDoneDelete = useCallback((id) => {
        console.log('done delete')
        const updatedTasks = doneTasks.filter((_, index) => index !== id)
        setDoneTasks(updatedTasks)
    }, [doneTasks])

    const handleReset = useCallback((id) => {
        console.log('reset')
        const resetTask = doneTasks[id]
        const updatedTasks  = [...tasks, resetTask]
        const updatedDoneTasks = doneTasks.filter((_, index) => index !== id)
        setTasks(updatedTasks)
        setDoneTasks(updatedDoneTasks)
    }, [doneTasks, tasks])
    
    
    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="enter a task"
                    onChange={handleChange}
                    value={currentTask} />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        task={task}
                        onDelete={handleDelete} // Pass onDelete function
                        onDone={handleDone} />
                ))}
            </ul>
        </div>
    )
}

export default FuncTodo

