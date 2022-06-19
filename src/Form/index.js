import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "../styled";

const Form = ({ addNewTask }) => {
    const internalRef = useRef(null);

    const [newTask, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim()) {
            addNewTask(newTask.trim());
        };
        setNewTask("");
        internalRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={internalRef}
                value={newTask}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__input"
                type="text"
                onChange={({ target }) => setNewTask(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;