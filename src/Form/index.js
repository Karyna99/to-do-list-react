import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTask, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTask.trim());
        setNewTask("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTask}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__input"
                type="text"
                onChange={({ target }) => setNewTask(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;