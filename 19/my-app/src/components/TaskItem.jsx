import React, { useState } from "react";

const TaskItem = ({ task, prevStatus, deadline, performerFirstName, performerLastName, additionalInfo, onDelete, onEdit, onToggleComplete }) => {
    const [checked, setChecked] = useState(prevStatus);
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const [editedDeadline, setEditedDeadline] = useState(deadline);
    const [editedPerformerFirstName, setEditedPerformerFirstName] = useState(performerFirstName);
    const [editedPerformerLastName, setEditedPerformerLastName] = useState(performerLastName);
    const [editedAdditionalInfo, setEditedAdditionalInfo] = useState(additionalInfo);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        onEdit({
            task: editedTask,
            deadline: editedDeadline,
            performerFirstName: editedPerformerFirstName,
            performerLastName: editedPerformerLastName,
            additionalInfo: editedAdditionalInfo
        });
    };

    const handleDelete = () => {
        onDelete();
    };

    const handleToggleComplete = () => {
        const updatedStatus = !checked;
        setChecked(updatedStatus);
        onToggleComplete(updatedStatus);
    };

    return (
        <div>
            {editing ? (
                <div>
                    <input 
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <input 
                        type="text"
                        value={editedDeadline}
                        onChange={(e) => setEditedDeadline(e.target.value)}
                        placeholder="Deadline"
                    />
                    <input 
                        type="text"
                        value={editedPerformerFirstName}
                        onChange={(e) => setEditedPerformerFirstName(e.target.value)}
                        placeholder="Performer First Name"
                    />
                    <input 
                        type="text"
                        value={editedPerformerLastName}
                        onChange={(e) => setEditedPerformerLastName(e.target.value)}
                        placeholder="Performer Last Name"
                    />
                    <input 
                        type="text"
                        value={editedAdditionalInfo}
                        onChange={(e) => setEditedAdditionalInfo(e.target.value)}
                        placeholder="Additional Information"
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{task}</h3>
                    <p>Deadline: {deadline}</p>
                    <p>Performer: {performerFirstName} {performerLastName}</p>
                    <p>Additional Information: {additionalInfo}</p>
                    <input 
                        type="checkbox"
                        checked={checked}
                        onChange={handleToggleComplete}
                    />
                    {checked ? 'Completed' : 'Pending'}
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TaskItem;
