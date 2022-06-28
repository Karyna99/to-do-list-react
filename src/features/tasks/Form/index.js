import { useRef, useState } from "react";
import { StyledForm, Input } from "./styled";
import { Button } from "../../../styled"
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

const Form = () => {
    const internalRef = useRef(null);
    const [newTask, setNewTask] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTask.trim();
        if (trimmedTaskContent) {
            dispatch(addTask({
                content: trimmedTaskContent,
                done: false,
                id: nanoid(),
            }));
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