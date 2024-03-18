import React, {PureComponent} from "react";
import styles from './styles.module.css';

class ClassTodo extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            currentTask: '',
            doneTasks: [],
            inProgressTasks: []
        };
    }


handleonChange = (event) => {
    this.setState({currentTask: event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    const newTask = {
        task: this.state.currentTask,
        done: false,
        inProgress: false
    };
    if(this.state.currentTask.trim() != ""){
        const tasks = [...this.state.tasks, newTask]
        this.setState({tasks, currentTask: ""});
    }
};

handleDelete = (index) => {
    console.log('delete')
    const tasks = [...this.state.tasks]
    tasks.splice(index, 1);
    this.setState({tasks});
};

handleDone = (index) => {
    console.log("done")
    const {tasks, doneTasks} = this.state;
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks.splice(index, 1)[0]
    completedTask.done = true
    completedTask.inProgress = false
    const completedDoneTasks = [...doneTasks, completedTask];
    this.setState({tasks: updatedTasks, doneTasks: completedDoneTasks});
};
handleInProgress = (index) => {
    console.log("in progress");
    const { tasks, inProgressTasks } = this.state;
    const updatedTasks = [...tasks];
    const inProgressTask = updatedTasks.splice(index, 1)[0];
    const updatedInProgressTasks = [...inProgressTasks, inProgressTask];
    this.setState({ tasks: updatedTasks, inProgressTasks: updatedInProgressTasks });
};

handleDoneDelete = (index) => {
    const doneTasks = [...this.state.doneTasks]
    doneTasks.splice(index, 1)
    this.setState({doneTasks})
}

handleReset = (index) => {
    console.log('reset')
    const {tasks, doneTasks} = this.state
    const resetTask = doneTasks.splice(index, 1)[0]
    const updatedTasks = [...tasks, resetTask]
    this.setState({tasks: updatedTasks, doneTasks: doneTasks})
}

shouldComponentUpdate(nextState) {
    if(nextState.tasks != this.state.tasks){
        return true
    }
    return false
}

render () {
    const { tasks, currentTask, doneTasks, inProgressTasks } = this.state
    return(
        <div className={styles.project}>
            <div className={styles.section}>
                <h1 className={styles.title} id={styles.todo}>Todo App</h1>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <div className={styles.input}>
                        <input className={styles.value}type="text"
                        placeholder="Enter A Task"
                        onChange={this.handleonChange}
                        value={currentTask} />
                        <button className={styles.btn} type="submit">Add Task</button>
                    </div>
                </form>
            </div>
            <div className={styles.section}>
                <h1 className={styles.title} id={styles.progress}>In Progress</h1> 
                <TodoList tasks={inProgressTasks} handleDelete={this.handleDelete} handleDone={this.handleDone} />

                <TodoList
                tasks={tasks}
                handleDelete={this.handleDelete}
                handleDone={this.handleDone}/>
            </div>
            <div className={styles.section}>
                <h1 className={styles.title} id={styles.done}>Done Tasks</h1>
                <DoneTasks
                    doneTasks={doneTasks}
                    handleDoneDelete={this.handleDoneDelete}
                    handleReset={this.handleReset}/>
            </div>
        </div>
    )
}
}

const TodoList = React.memo(({tasks, handleDelete, handleDone}) => (
    <ul className={styles.form}>
        {tasks.map((task,index) => (
            <li key={index} className={styles.input} id={styles.inputv2}>
                {task.task}
                <button className={styles.btn} onClick={() => handleDelete(index)}>delete</button>
                <button className={styles.btn} onClick={() => handleDone(index)}>done</button>
            </li>
        ))}
    </ul>
))

const DoneTasks = React.memo(({doneTasks, handleDoneDelete, handleReset}) => (
    <ul className={styles.form}>
        {doneTasks.map((task, index) => (
            <li key={index} className={styles.input} id={styles.inputv2}>
                {task.task}
                <button className={styles.btn} onClick={() => handleDoneDelete(index)}>delete</button>
                <button className={styles.btn} onClick={() => handleReset(index)}>reset</button>
            </li>
        ))}
    </ul>
))


export default ClassTodo;