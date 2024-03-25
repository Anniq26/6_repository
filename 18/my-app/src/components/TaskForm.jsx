import { useState } from "react"

const TaskForm = ({onFormSubmit}) => {

    const [taskName, setTaskname] = useState()


    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(taskName)
    }

    return <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="TaskName" 
        onChange={e => setTaskname(e.target.value)}
        />

        <button>Submit</button>
    </form>
}

export default TaskForm