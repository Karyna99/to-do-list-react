import { List, ListItem, TaskButton, Text } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <TaskButton
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : " "}
                    </TaskButton>
                    <Text done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Text>
                    <TaskButton
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >🗑️
                    </TaskButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;