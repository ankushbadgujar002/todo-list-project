import { Trash2 } from 'lucide-react';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="TaskList">
            {tasks.map(task => {
                return (
                    <ul key={task.id} className="task">
                        <li>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggle(task.id)}
                                name="checkbox" />
                            <span>{task.text}</span>
                            <Trash2 onClick={() => onDelete(task.id)} style={{ color: "red", cursor: 'pointer' }} />
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default TaskList;