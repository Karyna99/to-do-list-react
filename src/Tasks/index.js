import "./style.css";


const onDelete = (name) => {
    console.log(`Zadanie do usunięcia: ${name}`)
};

const Tasks = ({ tasks, hideDone }) => {
    return (
        <ul className="tasks__list">
            {tasks.map(task => (
                <li key={task.id} className={`list__item${task.done && hideDone ? "list__item--hidden" : ""}`}
                >
                    <button
                        className={`list__button--done`}>
                        {task.done ? "✓" : " "}
                    </button>
                    <span className={`${task.done ? "list__item--done" : ""}`}>
                        {task.content}</span>
                    <button
                        className="list__button--remove"
                        onClick={() => onDelete(task.content)}
                    >🗑️</button>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;