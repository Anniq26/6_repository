import { Component } from "react";
import TaskItem from "./TaskItem";
import TaskDone from "./TaskDone";

class TasksList extends Component {
    state = {
        tasks: [{id:1, task:'Task N1', done: false}, {id:2, task: 'Task N2', done: false}, {id:3, task: 'Task N3', done: false}],
        inputValue: '',
        doneTasks: []
      }
    
      onChange = (event) => {
        const value = event.target.value
        this.setState({
        inputValue: value
        })
      }


      addTask = (event) => {
        event.preventDefault()

        const task = {
            id: this.state.tasks.length + 1,
            task: this.state.inputValue,
            done: false
        }
        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue: '',
        })
      }
    //   remove this task
      removeTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState ({
            tasks
        })
      }


    // add task to tasks2

    toggleDone = (id) => {
        const doneTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
    }


    render (){
        return (
            <div className='container'>
                <div className='tasks'>

                    <form onSubmit={this.addTask} className="task-form">
                        <input type="text" onChange={this.onChange} value={this.state.inputValue} />
                        <button type="submit">Add New Task</button>
                    </form>

                    {this.state.tasks.map((task) => (
                       <TaskItem key={task.id} id={task.id} task={task.task} action={this.removeTask} />
                    ))}
                </div>



                <div className='tasks2'>
                    <div className='tasks-done'>
                        <h2 className='done'>Task Is Done</h2>
                        {this.state.doneTasks.map((task) => (
                            <TaskDone key={task.id} id={task.id} task={task.task} done={this.toggleDone} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TasksList