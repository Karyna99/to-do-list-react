import { List, ListItem, TaskButton, Text } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

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
                        {task.content}
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