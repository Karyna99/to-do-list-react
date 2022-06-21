import { ButtonsContainer, Button } from "../styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button task
                    onClick={setAllDone}
                    className="buttons__button--allDone"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
                <Button task
                    onClick={toggleHideDone}
                    className="buttons__button--hideAndShow">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
            </>
        )}
    </ButtonsContainer>
);

export default Buttons;