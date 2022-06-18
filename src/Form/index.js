import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const internalRef = useRef(null);
    
    const [newTask, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTask.trim());
        setNewTask("");
        internalRef.current.focus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={internalRef}
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