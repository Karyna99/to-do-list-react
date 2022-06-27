import { List, ListItem, TaskButton, Text } from "../../../styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskdone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

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
                        {task.content}
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

export default TaskList;