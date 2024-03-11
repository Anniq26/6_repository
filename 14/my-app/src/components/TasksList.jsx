import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskDone from './TaskDone';

const TasksList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, task: 'Task N1', done: false },
        { id: 2, task: 'Task N2', done: false },
        { id: 3, task: 'Task N3', done: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() => {
        const doneTasks = tasks.filter(task => task.done);
        setDoneTasks(doneTasks);
    }, [tasks]);

    const onChange = event => {
        setInputValue(event.target.value);
    };

    const addTask = event => {
        event.preventDefault();

        const task = {
            id: tasks.length + 1,
            task: inputValue,
            done: false
        };

        setTasks([...tasks, task]);
        setInputValue('');
    };

    const removeTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleDone = id => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <div className="tasks">
                <form onSubmit={addTask} className="task-form">
                    <input
                        type="text"
                        onChange={onChange}
                        value={inputValue}
                    />
                    <button type="submit">Add New Task</button>
                </form>

                {tasks.map(task =>
                    !task.done && (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            task={task.task}
                            action={removeTask}
                        />
                    )
                )}
            </div>

            <div className="tasks2">
                <div className="tasks-done">
                    <h2 className="done">Task Is Done</h2>
                    {doneTasks.map(task => (
                        <TaskDone
                            key={task.id}
                            id={task.id}
                            task={task.task}
                            done={toggleDone}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TasksList;
