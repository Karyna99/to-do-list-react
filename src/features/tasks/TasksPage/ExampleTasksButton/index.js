import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button task disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie" : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default ExampleTasksButton;