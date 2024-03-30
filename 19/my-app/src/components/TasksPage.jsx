import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import Tasks from "./Tasks";
import { deleteTask, updateTask, toggleTaskCompletion } from "../api"; 

const TasksPage = () => {
    const [taskList, setTaskList] = useState([]);
    

    useEffect(() => {
    }, []);

    const handleDelete = (taskId) => {
    };

    const handleEdit = (taskId, updatedTask) => {
    };

    const handleToggleComplete = (taskId, updatedStatus) => {
        toggleTaskCompletion(taskId, updatedStatus) 
            .then(() => {
                setTaskList(taskList.map(task => 
                    task.id === taskId ? { ...task, checked: updatedStatus } : task
                ));
            })
            .catch(error => console.error(error));
    };

    const onFormSubmit = (task, checked) => {

    };

    return (
        <div>
            <Tasks onFormSubmit={onFormSubmit} />
            {taskList.map((task) => (
                <TaskItem 
                    key={task.id}
                    task={task.task}
                    prevStatus={task.checked}
                    onDelete={() => handleDelete(task.id)}
                    onEdit={(updatedTask) => handleEdit(task.id, updatedTask)}
                    onToggleComplete={(updatedStatus) => handleToggleComplete(task.id, updatedStatus)}
                />
            ))}
        </div>
    );
};

export default TasksPage;
