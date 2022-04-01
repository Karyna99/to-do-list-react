import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__container">
        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    className="section__button--allDone"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
                <button
                    className="section__button--hideAndShow">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;