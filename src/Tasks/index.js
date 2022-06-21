import { List, ListItem, TaskButton, Text } from "../styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskdone }) => {
    return (
        <List>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <TaskButton
                        done
                        onClick={() => toggleTaskdone(task.id)}
                    >
                        {task.done ? "✓" : " "}
                    </TaskButton>
                    <Text done={task.done}>
                        {task.id} - {task.content}
                    </Text>
                    <TaskButton
                        remove
                        onClick={() => removeTask(task.id)}
                    >🗑️
                    </TaskButton>
                </ListItem>
            ))}
        </List>
    );
};

export default Tasks;