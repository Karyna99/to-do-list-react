import { Button } from "../../../styled";
import { ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux"
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button task
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                    <Button task
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};

export default Buttons;