import { useState } from "react";
import TaskList from "./TaskList";

const TodoList = () => {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([])


    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const remainingTasks = totalTasks - completedTasks;

    const HandleAddTask = (e) => {
        if (newTask.trim()) {

            const task = {
                id: Date.now(),
                text: newTask,
                completed: false
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
        else {
            alert('Input Must be Inserted!');
        }
    }

    const HandleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const handleToggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    };


    return (
        <>
            <div className="todo-stats">
                <h3
                    style={{
                        textAlign: 'center',
                        margin: '0'
                    }}
                >Task Statistics</h3>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        gap: '10px'
                    }}
                >
                    <p>Total Tasks: {totalTasks}</p>
                    <p>Completed Tasks: {completedTasks}</p>
                    <p>Remaining Tasks: {remainingTasks}</p>
                </div>
            </div><div className="sub-container">
                <input
                    autoFocus
                    className="search-box"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task..." />
                <br />
                <button onClick={HandleAddTask}>Add Task</button>
                <TaskList
                    tasks={tasks}
                    onToggle={handleToggleTask}
                    onDelete={HandleDeleteTask}
                />
            </div>
        </>
    )
}

export default TodoList