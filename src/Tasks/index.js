import "./style.css";




const Tasks = ({ tasks, hideDone, removeTask, toggleTaskdone }) => {
    return (
        <ul className="tasks__list">
            {tasks.map(task => (
                <li key={task.id} className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
                >
                    <button
                        className={`list__button--done`}
                        onClick={() => toggleTaskdone(task.id)}
                    >
                        {task.done ? "✓" : " "}
                    </button>
                    <span className={`${task.done ? "list__item--done" : ""}`}>
                    {task.id} - {task.content}
                    </span>
                    <button
                        className="list__button--remove"
                        onClick={() => removeTask(task.id)}
                    >🗑️</button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;