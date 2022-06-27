import { ButtonsContainer, Button } from "../../../styled";
import { useSelector, useDispatch } from "react-redux"
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button task
                        onClick={setAllDone}
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