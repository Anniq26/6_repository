import React from 'react'

const TaskItem = ({id, task, action}) => {
  return (
    <div className='tasks-item'>
        <p>ID: {id}</p>
        <p>TASK: {task}</p>

        <button onClick={() => action(id)} >Task Done</button>
    </div>
  )
}

export default TaskItem