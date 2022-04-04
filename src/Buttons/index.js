import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    className="buttons__button--allDone"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
                <button
                    className="buttons__button--hideAndShow">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;